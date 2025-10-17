Render Email Setup

Render often blocks outbound SMTP which causes ETIMEDOUT errors when using SMTP providers like Gmail. Follow these steps to configure SendGrid on Render:

1. Create a SendGrid account and generate an API key with "Full Access" (or Mail Send permissions).

2. In the Render dashboard for your service, go to Environment -> Environment Variables and add:

- SENDGRID_API_KEY = <your_sendgrid_api_key>
- MAIL_FORCE_SENDGRID = true
- MAIL_PREFER_SENDGRID = true
- MAIL_DEBUG = true    # optional for verbose logs

3. Optional local dev settings (use `.env` locally):
- MAIL_HOST=smtp.gmail.com
- MAIL_PORT=465
- MAIL_SECURE=true
- MAIL_USER=youremail@gmail.com
- MAIL_PASSWORD=<gmail_app_password>

4. Rotate any credentials that were exposed in your repo. Keep production keys only in Render environment variables.

5. Restart your Render service. The app will now use SendGrid over HTTPS (stable on Render) and avoid SMTP timeouts.
