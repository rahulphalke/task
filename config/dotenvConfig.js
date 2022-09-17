const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    // endpoint: process.env.API_URL,
    // masterKey: process.env.API_KEY,
    db_user:process.env.DB_USER,
    port: process.env.PORT,
    db_name:process.env.DB_NAME,
    db_password:process.env.DB_PASSWORD,
    db_host:process.env.DB_HOST,
    encrypt_key:process.env.ENCRYPTION_KEY
  };