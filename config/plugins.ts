module.exports = ({ env }) => ({
  // FIX: This block explicitly sets the session cookie for the Users & Permissions plugin 
  // to 'secure: true', which is required when running behind Render's HTTPS proxy.
  'users-permissions': {
    config: {
      session: {
        maxAge: 2592000000, 
        cookie: {
          secure: true, // Forces secure cookie, resolves "Cannot send secure cookie" error
          httpOnly: true,
          sameSite: 'Lax',
        },
      },
    },
  },
  
  // Existing Cloudinary upload configuration
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
