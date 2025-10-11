// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../models';
import { Config } from '../../config/config';
import * as argon2 from 'argon2';
import { body, validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function loginUser(request: Request, response: Response) {
  // validate input
  await body('login_id').notEmpty().withMessage('login_id is required').bail().isString().trim().run(request);
  await body('password').notEmpty().withMessage('password is required').bail().isString().run(request);

  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({ status: 'fail', errors: errors.array() });
  }

  const { login_id, password } = request.body;
  try {
    const user = await prisma.users.findFirst({
        where: {
          OR: [
            { email: login_id },
            { username: login_id }
          ]
        }
      });

    if (!user) {
      return response.status(401).json({ message: 'Invalid credentials' });
    }

     // Check if user password is null
     if (user.password === null) {
        return response.status(401).json({ error: 'Invalid email/username or password' });
      }

      if (!user.password.startsWith('$argon2')) {
        console.error('Password format is invalid:', user.password);
        return response.status(400).json({ message: 'Invalid password format in database' });
      }

    // Verify the password
    const passwordMatch = await argon2.verify(user.password, password);

    if (!passwordMatch) {
      response.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    if (!Config.secret) {
      console.error('Jwt_secret is not defined!');
      response.status(500).json({ message: 'Internal Server Error' });
      return;
    }

    // Generate a JWT token for the admin
        const token = jwt.sign(
          { 
            id: user.id, 
            email: user.email,
            fullname: user.fullname,
            profile_image: user.profile_image,
            email_verification: user.email_verified,
            role: user.role
          }, 
          Config.secret,
          { expiresIn: '24h' } // Add token expiration
        );

      response.status(200).json({ 
        token,
        success: true,
        message: 'Login successful',
        user
       });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function logoutUser(request: Request, response: Response) {
  try {
    // If you are using JWT tokens, you can clear the token on the client side by removing it from cookies or local storage.
    // Here, we'll focus on clearing the token from cookies.

    // Clear the JWT token from the client-side cookies
    response.clearCookie('jwt');

    // Optionally, you can perform additional tasks here, such as logging the Admin's logout action.

    // Send a success response to the client
    response.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    // Handle any potential errors that may occur during the logout process.
    console.error('Error during logout:', error);
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

export async function verifyUserEmail(request: Request, response: Response){
  // Validate request inputs
  const user_id = request.user.id;

  await body('verificationCode').notEmpty().withMessage('Verification code is required').run(request);

  // Check if user_id is not present or undefined
    if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(422).json({ status: "fail", errors: errors.array() });
  }

  // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;
    const email = user?.email;

  const { verificationCode } = request.body;

  try {
    // Find the user by email
    const admin = await prisma.users.findUnique({
      where: { email },
    });

    if (!admin) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    // Check if already verified
    if (admin.email_verified) {
      return response.status(200).json({ status: "success", message: "Email already verified." });
    }

    // Validate the verification code
    if (admin.verification_code !== verificationCode) {
      return response.status(400).json({ status: "fail", message: "Invalid verification code." });
    }

    // Update the verification status
   const user = await prisma.users.update({
      where: { email },
      data: {
        email_verified: true,
        verification_code: null, 
        status: "Active"
      },
    });

    return response.status(200).json({ status: "success", message: "Email verified successfully.", user});
  } catch (error) {
    console.error("Email Verification Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}

export async function changeUserTemporalPassword(request: Request, response: Response) {
  const user_id = request.user.id;

  if (!user_id) {
    return response.status(403).json({ message: 'Unauthorized User' });
  };
  
  await body('newPassword')
    .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
    .matches(/[0-9]/).withMessage('New password must contain at least one number')
    .matches(/[\W]/).withMessage('New password must contain at least one special character')
    .run(request);

  await body('confirmPassword')
    .notEmpty().withMessage('Password confirmation is required')
    .run(request);

  const result = validationResult(request);
  const errors = result.array();

  if (request.body.newPassword !== request.body.confirmPassword) {
    return response.status(422).json({ status: "fail", errors: "Passwords do not match" });
  }

  if (errors.length > 0) {
    return response.status(422).json({ status: "fail", errors });
  }

  try {
    const find_user = await prisma.users.findUnique({
      where: { id: user_id },
    });

    if (!find_user) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    const hashedPassword = await argon2.hash(request.body.newPassword);

    const user = await prisma.users.update({
      where: { id: user_id },
      data: {
        password: hashedPassword,
        temporal_password: false
      },
    });

    return response.status(200).json({ status: "success", message: "Password updated successfully.", user:user });
  } catch (error) {
    console.error("Change Password Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}

export async function changeUserPassword(request: Request, response: Response) {
  const user_id = request.user.id;
  if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
  // Validate input fields
  await body('currentPassword')
    .notEmpty().withMessage('Current password is required')
    .run(request);

  await body('newPassword')
    .isLength({ min: 8 }).withMessage('New password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('New password must contain at least one uppercase letter')
    .matches(/[a-z]/).withMessage('New password must contain at least one lowercase letter')
    .matches(/[0-9]/).withMessage('New password must contain at least one number')
    .matches(/[\W]/).withMessage('New password must contain at least one special character')
    .run(request);

  await body('confirmPassword')
    .notEmpty().withMessage('Password confirmation is required')
    .run(request);

  const result = validationResult(request);
  const errors = result.array();

  // Manually confirm password match
  if (request.body.newPassword !== request.body.confirmPassword) {
    return response.status(422).json({ status: "fail", errors:"Password do not match" });
  }

  if (errors.length > 0) {
    return response.status(422).json({ status: "fail", errors });
  }

  if (!user_id) {
    // throw new Error("Missing user ID");
    return response.status(400).json({ message: 'Missing user ID', data:user_id });
  }

  // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;

  const { currentPassword, newPassword } = request.body;
  const userId = request.user?.id;

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    const isMatch = await argon2.verify(user.password, currentPassword);
    if (!isMatch) {
      return response.status(400).json({ status: "fail", message: "Incorrect current password." });
    }

    const hashedPassword = await argon2.hash(newPassword);

    await prisma.users.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    return response.status(200).json({ success: true, status: "success", message: "Password updated successfully." });
  } catch (error) {
    console.error("Change Password Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}

export async function profile(request: Request, response: Response) {
  const user_id = request.user.id;
  if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

  if (!user_id) {
    // throw new Error("Missing user ID");
    return response.status(400).json({ message: 'Missing user ID', data:user_id });
  }

  // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;

  try {
    const user = await prisma.users.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    return response.status(200).json({ status: "success", message: "User Profile fetched successfully.", data:user });
  } catch (error) {
    console.error("Change Password Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}

export async function update_profile(request: Request, response: Response) {
  const user_id = request.user.id;
  if (!user_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
  // Validate input fields
  await body('fullname')
    .notEmpty().withMessage('Fullname is required')
    .run(request);

  await body('email')
    .notEmpty().isEmail().withMessage('New password must be at least 8 characters')
    .run(request);

  await body('phone_number')
    .notEmpty().withMessage('Phone number is required')
    .run(request);

  const result = validationResult(request);
  const errors = result.array();

  if (errors.length > 0) {
    return response.status(422).json({ status: "fail", errors });
  }

  if (!user_id) {
    // throw new Error("Missing user ID");
    return response.status(400).json({ message: 'Missing user ID', data:user_id });
  }

  // Retrieve the user by user_id
    const user = await prisma.users.findUnique({ where: { id: user_id } });
    const role = user?.role;

  const userId = request.user?.id;

  try {
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return response.status(404).json({ status: "fail", message: "User not found." });
    }

    const { fullname, email, phone_number} = request.body

    const updated_user = await prisma.users.update({
      where: { id: userId },
      data: {
        fullname,
        email,
        phone_number
      },
    });

    return response.status(200).json({ status: "success", message: "Profile updated successfully.", data:updated_user });
  } catch (error) {
    console.error("Change Password Error:", error);
    return response.status(500).json({ status: "error", message: "Something went wrong." });
  }
}