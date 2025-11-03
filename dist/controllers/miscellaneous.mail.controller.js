"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailHealth = mailHealth;
const emailSender_1 = require("../utils/emailSender");
async function mailHealth(req, res) {
    try {
        const result = await (0, emailSender_1.verifyMailTransport)();
        // console.log('mailHealth result', result);
        if (result.ok) {
            return res.status(200).json({ status: 'ok', provider: result.provider });
        }
        return res.status(502).json({ status: 'fail', provider: result.provider, detail: result.detail });
    }
    catch (error) {
        console.error('mailHealth error', error);
        return res.status(500).json({ status: 'error', message: 'Unable to determine mail health' });
    }
}
