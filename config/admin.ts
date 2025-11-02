export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  
  // CRITICAL FIX: Explicitly configures the session cookie 
  // to be secure only in production, resolving the Render HTTPS proxy issue.
  session: {
    cookie: {
      secure: env('NODE_ENV') === 'production',
      httpOnly: true,
      sameSite: 'Lax',
    },
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
