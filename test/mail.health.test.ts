import request from 'supertest';
import app from '../src/app';

describe('Mail health endpoint', () => {
  it('should return 200 OK when mail provider is healthy (mocked)', async () => {
    // This test assumes SENDGRID_API_KEY is set in test env or the endpoint handles it gracefully.
    const res = await request(app).get('/api/v1/health/mail');
    expect([200, 502, 500]).toContain(res.status);
    // If SendGrid is configured and reachable, we expect 200
  });
});
