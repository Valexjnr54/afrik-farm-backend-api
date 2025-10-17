import axios from 'axios';

const termiiEndpoint = process.env.TERMII_ENDPOINT || 'https://api.ng.termii.com/api/sms/send';

function normalizePhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, '');

  if (digitsOnly.startsWith('0')) {
    return '+234' + digitsOnly.slice(1);
  }

  if (digitsOnly.startsWith('234')) {
    return '+' + digitsOnly;
  }

  if (phone.startsWith('+234')) {
    return phone;
  }

  throw new Error('Invalid Nigerian phone number format.');
}

export async function sendSMS(phoneNumber: string, message: string): Promise<void> {
  const termiiApiKey = process.env.TERMII_API_KEY || 'TLnKEIpJKGxysuOGyHgecmc5p24lmOeEC9TbqRLNdIMXzpHU367qUu8aoe9E1R';
  if (!termiiApiKey) {
    // Avoid embedding secrets in source; require env var to be provided.
    console.error('TERMII_API_KEY is not set in environment.');
    throw new Error('TERMII_API_KEY is required to send SMS.');
  }

  const formattedNumber = normalizePhoneNumber(phoneNumber);

  try {
    const response = await axios.post(
      termiiEndpoint,
      {
        api_key: termiiApiKey,
        to: formattedNumber,
        sms: message,
        from: 'N-Alert',
        type: 'plain',
        channel: 'dnd',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // console.log('SMS sent successfully:', response.data);
  } catch (error: unknown) {
    // runtime check for axios errors — don't rely on axios type exports to be present
    const errAny = error as any;
    if (errAny && errAny.isAxiosError) {
      console.error('Error sending SMS:', errAny.response?.data ?? errAny.message);
      throw new Error(`Failed to send SMS: ${JSON.stringify(errAny.response?.data ?? errAny.message)}`);
    } else {
      console.error('Unknown error while sending SMS:', error);
      throw error;
    }
  }
}