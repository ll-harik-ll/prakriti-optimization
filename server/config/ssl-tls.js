import dotenv from 'dotenv';

// Loading env variables
dotenv.config();

const SSL_CERT_PATH = process.env.SSL_CERT_PATH;
const SSL_KEY_PATH  = process.env.SSL_KEY_PATH;

export { SSL_CERT_PATH, SSL_KEY_PATH };