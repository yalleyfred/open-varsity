import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

export const DB_PORT = Number(process.env.DB_PORT);