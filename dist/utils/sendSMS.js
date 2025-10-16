"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSMS = sendSMS;
const axios_1 = __importDefault(require("axios"));
const termiiEndpoint = process.env.TERMII_ENDPOINT || 'https://api.ng.termii.com/api/sms/send';
function normalizePhoneNumber(phone) {
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
async function sendSMS(phoneNumber, message) {
    const termiiApiKey = process.env.TERMII_API_KEY || 'TLQvkk7mJcru5ajmXjD6BuEwrBPead7GNyltdUz9RZHpOEC9zfxlwbA6BqHjpn';
    if (!termiiApiKey) {
        // Avoid embedding secrets in source; require env var to be provided.
        console.error('TERMII_API_KEY is not set in environment.');
        throw new Error('TERMII_API_KEY is required to send SMS.');
    }
    const formattedNumber = normalizePhoneNumber(phoneNumber);
    try {
        const response = await axios_1.default.post(termiiEndpoint, {
            api_key: termiiApiKey,
            to: formattedNumber,
            sms: message,
            from: 'N-Alert',
            type: 'plain',
            channel: 'dnd',
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // console.log('SMS sent successfully:', response.data);
    }
    catch (error) {
        // runtime check for axios errors — don't rely on axios type exports to be present
        const errAny = error;
        if (errAny && errAny.isAxiosError) {
            console.error('Error sending SMS:', errAny.response?.data ?? errAny.message);
            throw new Error(`Failed to send SMS: ${JSON.stringify(errAny.response?.data ?? errAny.message)}`);
        }
        else {
            console.error('Unknown error while sending SMS:', error);
            throw error;
        }
    }
}
