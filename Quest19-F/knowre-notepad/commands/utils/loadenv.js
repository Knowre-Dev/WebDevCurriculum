const dotenv = require('dotenv');

const isProd = process.env.NODE_ENV === 'production';

exports.loadEnv = () => {
  if (isProd) {
    dotenv.config({ path: '.env.prod' });
  } else {
    dotenv.config({ path: '.env.dev' });
  }
};
