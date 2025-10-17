import { Request, Response } from 'express';
import { PrismaClient } from '../../models';
import { body, validationResult } from 'express-validator';
import { count } from 'console';
import { verifynin } from '../../services/verification';
import { uploadImage } from '../../utils/cloudinary';
import fs from 'fs';
import { sendSMS } from '../../utils/sendSMS';
import { Config } from '../../config/config';
import { extractReferenceFromRequest, initializePayment, verifyPayment } from '../../utils/paystack';

const prisma = new PrismaClient();

function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function createFarmer(request: Request, response: Response) {
	const admin_id = request.user?.id ?? null;
 	// require authenticated user (admin or LGA user) to create farmers
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const rules = [
		body('fullname').notEmpty().withMessage('fullname is required').bail().isString().trim().isLength({ min: 2 }),
		body('email').optional().isEmail().withMessage('Invalid email'),
		body('phone_number').notEmpty().withMessage('phone_number is required').bail().isString().trim(),
		body('phone_verified').notEmpty().isBoolean().withMessage('Phone verified must be a boolean'),
		body('nin_verified').notEmpty().isBoolean().withMessage('NIN verified must be a boolean'),
		body('nin').notEmpty().withMessage('nin is required').bail().isString().trim(),
		body('address').notEmpty().withMessage('address is required').bail().isString().trim(),
		body('bankId').notEmpty().withMessage('bankId is required').bail().isInt().withMessage('bankId must be an integer'),
        body('account_name').notEmpty().withMessage('Account Name is required').bail().isString().trim(),
        body('account_number').notEmpty().withMessage('Account Number is required').bail().isString().trim(),
		body('profile_image').notEmpty().withMessage('Account Number is required').isString(),
		body('proof_of_address').notEmpty().withMessage('Account Number is required').isString(),
	];

	await Promise.all(rules.map(r => r.run(request)));
	const errors = validationResult(request);
	if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

	const { fullname, email, phone_number, phone_verified, nin_verified, nin, address, bankId, account_number, account_name, profile_image, proof_of_address } = request.body as any;

    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if(!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

	try {
		const existing = await prisma.farmer.findFirst({ where: { OR: [ { email }, { phone_number }, { nin } ] } });
		if (existing) return response.status(400).json({ message: 'Farmer with same email/phone/nin already exists' });

		const data: any = {
			fullname: fullname.trim(),
			email: email ? String(email).trim() : undefined,
			phone_number: phone_number.trim(),
			phone_verified: Boolean(phone_verified),
			nin_verified: Boolean(nin_verified),
			nin: nin.trim(),
			address: address.trim(),
			bankId: Number(bankId),
            account_number,
            account_name,
			profile_image: profile_image ? String(profile_image).trim() : undefined,
			proof_of_address: proof_of_address ? String(proof_of_address).trim() : undefined,
			account_created_by: lga_admin.id,
            countryId : lga_admin.countryId,
            stateId : lga_admin.stateId,
            lgaId : lga_admin.lgaId
		};

		const farmer = await prisma.farmer.create({ data });

		return response.status(201).json({ message: 'Farmer created', data: farmer });
	} catch (error) {
		console.error('createFarmer error', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function listFarmers(request: Request, response: Response) {
    const admin_id = request.user?.id ?? null;
 	// require authenticated user (admin or LGA user) to create farmers
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });
    
	try {
		const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
        if(!lga_admin) {
            return response.status(403).json({ message: 'Unauthorized User' });
        }
		const lga_id = lga_admin.lgaId;
		const farmers = await prisma.farmer.findMany({ where: {lgaId: Number(lga_id) }, orderBy: { createdAt: 'desc' } });
		return response.status(200).json({ message: 'Farmers fetched', data: farmers });
	} catch (error) {
		console.error('listFarmers error', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function getFarmer(request: Request, response: Response) {
	const id = parseInt(request.params.id, 10);
	if (!id) return response.status(400).json({ message: 'Farmer id required' });
	try {
		const farmer = await prisma.farmer.findUnique({ where: { id } });
		if (!farmer) return response.status(404).json({ message: 'Farmer not found' });
		return response.status(200).json({ message: 'Farmer fetched', data: farmer });
	} catch (error) {
		console.error('getFarmer error', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function updateFarmer(request: Request, response: Response) {
	const id = parseInt(request.params.id, 10);
	if (!id) return response.status(400).json({ message: 'Farmer id required' });

	const rules = [
		body('fullname').optional().isString().trim().isLength({ min: 2 }),
		body('email').optional().isEmail(),
		body('phone_number').optional().isString().trim(),
		body('nin').optional().isString().trim(),
		body('address').optional().isString().trim(),
		body('bankId').optional().isInt(),
		body('countryId').optional().isInt(),
		body('stateId').optional().isInt(),
		body('lgaId').optional().isInt(),
		body('profile_image').optional().isString(),
		body('proof_of_address').optional().isString(),
		body('verification_code').optional().isString(),
		body('email_verified').optional().isBoolean(),
		body('phone_verified').optional().isBoolean(),
		body('has_subscribed').optional().isBoolean(),
		body('status').optional().isIn(['Available','Pending','Completed','Rejected','Approved','Inactive','Active','Suspend']),
	];

	await Promise.all(rules.map(r => r.run(request)));
	const errors = validationResult(request);
	if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

	const bodyData = request.body as any;
	const data: any = {};
	if (bodyData.fullname) data.fullname = String(bodyData.fullname).trim();
	if (bodyData.email) data.email = String(bodyData.email).trim();
	if (bodyData.phone_number) data.phone_number = String(bodyData.phone_number).trim();
	if (bodyData.nin) data.nin = String(bodyData.nin).trim();
	if (bodyData.address) data.address = String(bodyData.address).trim();
	if (bodyData.bankId) data.bankId = Number(bodyData.bankId);
	if (bodyData.countryId) data.countryId = Number(bodyData.countryId);
	if (bodyData.stateId) data.stateId = Number(bodyData.stateId);
	if (bodyData.lgaId) data.lgaId = Number(bodyData.lgaId);
	if (bodyData.profile_image) data.profile_image = String(bodyData.profile_image);
	if (bodyData.proof_of_address) data.proof_of_address = String(bodyData.proof_of_address);
	if (bodyData.verification_code) data.verification_code = String(bodyData.verification_code);
	if (typeof bodyData.email_verified !== 'undefined') data.email_verified = Boolean(bodyData.email_verified);
	if (typeof bodyData.phone_verified !== 'undefined') data.phone_verified = Boolean(bodyData.phone_verified);
	if (typeof bodyData.has_subscribed !== 'undefined') data.has_subscribed = Boolean(bodyData.has_subscribed);
	if (bodyData.status) data.status = bodyData.status;

	try {
		const farmer = await prisma.farmer.update({ where: { id }, data });
		return response.status(200).json({ message: 'Farmer updated', data: farmer });
	} catch (error) {
		console.error('updateFarmer error', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function deleteFarmer(request: Request, response: Response) {
	const id = parseInt(request.params.id, 10);
	if (!id) return response.status(400).json({ message: 'Farmer id required' });
	try {
		const farmer = await prisma.farmer.findUnique({ where: { id } });
		if (!farmer) return response.status(404).json({ message: 'Farmer not found' });
		await prisma.farmer.delete({ where: { id } });
		return response.status(200).json({ message: 'Farmer deleted' });
	} catch (error) {
		console.error('deleteFarmer error', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function verifyNIN(request: Request, response: Response) {
    const admin_id = request.user?.id ?? null;
 	// require authenticated user (admin or LGA user) to create farmers
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if(!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    const role = lga_admin.role;
    if(role !== 'lga_admin') {
        return response.status(403).json({ message: 'Unauthorized User' });
    }
    const rules = [
		body('nin').notEmpty().withMessage('nin is required').bail().isString().trim(),
	];

	await Promise.all(rules.map(r => r.run(request)));
	const errors = validationResult(request);
	if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

	const { nin } = request.body as any;

    try {
        const verified = await verifynin(nin);

        return response.status(200).json({ message: 'Verified Farmer`s NIN', data: verified });
    } catch (error) {
        console.error('verifyNIN error', error);
        return response.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function profile_imageUpload(request: Request, response: Response) {
    const lga_admin_id = request.user?.id;

    if (!lga_admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Profile image is required' });
        }

        const image_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadImage(image_path, 'afrik_farm/images/profile_images/');

        // Delete the local file after uploading
        fs.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });

        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Profile image uploaded successfully',
                image_url: uploadedImageUrl,
            });
        } else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    } catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}

export async function proof_of_addressUpload(request: Request, response: Response) {
    const lga_admin_id = request.user?.id;

    if (!lga_admin_id) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

    try {
        if (!request.file) {
            return response.status(400).json({ message: 'Proof of address is required' });
        }

        const image_path = request.file.path;

        // Upload image to Cloudinary
        const uploadedImageUrl = await uploadImage(image_path, 'afrik_farm/images/proof_of_address/');

        // Delete the local file after uploading
        fs.unlink(image_path, (err) => {
            if (err) {
                console.error(`Error deleting file: ${image_path}`, err);
            }
        });

        if (uploadedImageUrl) {
            return response.status(200).json({
                message: 'Proof of address uploaded successfully',
                image_url: uploadedImageUrl,
            });
        } else {
            return response.status(500).json({ message: 'Failed to upload image' });
        }
    } catch (error) {
        console.error('Image upload error:', error);
        return response.status(500).json({ message: 'Server error', error });
    }
}

export async function send_verification_code(request: Request, response: Response) {
	const admin_id = request.user?.id ?? null;
 	// require authenticated user (admin or LGA user) to create farmers
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const rules = [
		body('phone_number').notEmpty().withMessage('phone_number is required').bail().isString().trim(),
	];

	await Promise.all(rules.map(r => r.run(request)));

	const errors = validationResult(request);
	if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

	const { phone_number } = request.body as any;

    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if(!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

	try{
		const existing = await prisma.farmer.findFirst({ where: { OR: [ { phone_number } ] } });
		if (existing) return response.status(400).json({ message: 'Farmer with same phone number already exists' });

		const verification_code = generateVerificationCode();
		// Store the verification code with an expiration time (e.g., 10 minutes)

		const codeEntry = await prisma.verificationCode.create({
			data: {
				identifier: phone_number.trim(),
				code: verification_code,
				expiresAt: new Date(Date.now() + 10 * 60 * 1000), // Expires in 10 minutes
			}
		});
		const message = `Your Afrik Farm one-time password is: ${verification_code}. It expires in 10 minutes. Do not share this code with anyone.`;
		await sendSMS(phone_number, message);

		return response.status(200).json({ message: 'Verification code sent successfully' });
	}catch(error){
		console.error('Error sending verification code:', error);
		return response.status(500).json({ message: 'Failed to send verification code', error });
	}
}

export async function verify_code(request: Request, response: Response) {
	const admin_id = request.user?.id ?? null;
	// require authenticated user (admin or LGA user) to create farmers
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const rules = [
		body('phone_number').notEmpty().withMessage('phone_number is required').bail().isString().trim(),
		body('code').notEmpty().withMessage('code is required').bail().isString().trim(),
	];

	await Promise.all(rules.map(r => r.run(request)));

	const errors = validationResult(request);
	if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

	const { phone_number, code } = request.body as any;

	const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
	if(!lga_admin) {
		return response.status(403).json({ message: 'Unauthorized User' });
	}

	try {
		const entry = await prisma.verificationCode.findFirst({
			where: { identifier: phone_number },
			select: { identifier: true, code: true, expiresAt: true },
			orderBy: { createdAt: 'desc' }
		});

		if (!entry) {
			console.warn(`Verification code not found for identifier ${phone_number}`);
			return response.status(404).json({ message: 'Verification code not found' });
		}

		// check expiration if field exists
		if (entry.expiresAt && new Date(entry.expiresAt) < new Date()) {
			return response.status(400).json({ message: 'Verification code expired' });
		}

		const isMatch = entry.code === code;

		if (!isMatch) {
			console.warn(`OTP mismatch for identifier ${entry.identifier}`);
			return response.status(400).json({ message: 'Invalid verification code' });
		}

		// delete the used verification code
		await prisma.verificationCode.delete({ where: { code: entry.code } });

		return response.status(200).json({ message: 'Verification successful' });
	} catch (error) {
		console.error('Failed to verify code:', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function initialize_payment(request: Request, response: Response){
	const admin_id = request.user?.id ?? null;
 	// require authenticated user (admin or LGA user) to create farmers
	if (!admin_id) return response.status(403).json({ message: 'Unauthorized User' });

	const rules = [
		body('farmer_id').notEmpty().withMessage('Farmer Id is required').bail().isInt().withMessage('Farmer Id must be an integer'),
		body('amount').notEmpty().withMessage('Amount is required').isFloat().withMessage('Amount must be a float'),
	];

	await Promise.all(rules.map(r => r.run(request)));
	const errors = validationResult(request);
	if (!errors.isEmpty()) return response.status(422).json({ status: 'fail', errors: errors.array() });

	const { farmer_id, amount } = request.body as any;

    const lga_admin = await prisma.users.findUnique({ where: { id: admin_id } });
    if(!lga_admin) {
        return response.status(403).json({ message: 'Unauthorized User' });
    }

	const callback_url = Config.paystackDeliveryCallback;
    if (!callback_url) {
      return response
        .status(400)
        .json({ message: "Callback Can't be undefined" });
    }

    const amount_to_pay = amount * 100

	const farmer = await prisma.farmer.findUnique({ where: { id: farmer_id } });
    if(!farmer) {
        return response.status(404).json({ message: 'Farmer not found' });
    }

	const phone_number = farmer.phone_number

	try {
		const paymentInfo = await initializePayment(
			farmer.id,
			phone_number,
			amount_to_pay,
			lga_admin.email,
			callback_url,
		);

		return response.status(200).json({ data: paymentInfo });
	} catch (error) {
		console.error('initialize_payment error', error);

		// If the utility threw a normalized error with status/details, use them
		const errAny = error as any;
		if (errAny && errAny.message && errAny.status) {
			const statusCode = errAny.status === 500 ? 502 : errAny.status; // map paystack server errors to 502
			return response.status(statusCode).json({ message: errAny.message, details: errAny.details });
		}

		// Missing configuration (message thrown by ensureConfig)
		if (errAny && errAny.message && String(errAny.message).includes('PAYSTACK_API_KEY')) {
			return response.status(500).json({ message: errAny.message });
		}

		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

export async function verify_payment(request: Request, response: Response){
	try {
		const reference = extractReferenceFromRequest(request);
		if (typeof reference !== "string") {
			return response.status(400).json({ message: 'Invalid reference' });
		}

		// verifyPayment returns unknown, narrow it to any (or a proper type/interface) before usage
		const paymentDetails: any = await verifyPayment(reference);

		// Safely access nested properties
		const referenceDetails = paymentDetails.data.reference;
		const paymentStatus = paymentDetails.data.status;
		const email = paymentDetails.data.metadata.email;
		const paidamount = paymentDetails.data.metadata.amount;
		const phone_number = paymentDetails.data.metadata.phone_number;
		const farmer_id = parseInt(paymentDetails.data.metadata.farmer_id);

    	const price = (paidamount / 100).toString();

		const checkfarmer = await prisma.farmer.findUnique({
			where: { id: farmer_id },
		});

		if (!checkfarmer)
		{
			return response.status(404).json({ message: 'Farmer does not exist' });
		}

		const invoice = await prisma.invoice.findUnique({
			where: { payment_reference: referenceDetails, farmerId: farmer_id},
		});

		if (invoice) {
			return response.status(200).json({ message: "Payment was Successful", data:checkfarmer, payment:invoice });
		}

		const create_invoice = await prisma.invoice.create({
			data: {
				farmerId: farmer_id,
				phone_number,
				amount: Number(price),
				has_paid:true,
				payment_reference: referenceDetails,
				status: 'Paid'
			}
		});

		const farmer = await prisma.farmer.update({
			where: { id: farmer_id },
			data: { has_paid: true }
		})

		return response.status(200).json({ message: "Payment was Successful", data:farmer, payment:create_invoice });

	} catch (error) {
		console.error('verify_payment error', error);
		return response.status(500).json({ message: 'Internal Server Error' });
	}
}

function Float(price: string): any {
	throw new Error('Function not implemented.');
}
