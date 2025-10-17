import { Request, Response } from 'express';
import { verifyMailTransport } from '../utils/emailSender';

export async function mailHealth(req: Request, res: Response) {
  try {
    const result = await verifyMailTransport();
    // console.log('mailHealth result', result);
    if (result.ok) {
      return res.status(200).json({ status: 'ok', provider: result.provider });
    }
    return res.status(502).json({ status: 'fail', provider: result.provider, detail: result.detail });
  } catch (error) {
    console.error('mailHealth error', error);
    return res.status(500).json({ status: 'error', message: 'Unable to determine mail health' });
  }
}
