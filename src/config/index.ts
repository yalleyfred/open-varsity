import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
// export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

export const DB_PORT = Number(process.env.DB_PORT);

export const db_name = String(process.env.DB_NAME);
export const db_host = String(process.env.DB_HOST);
export const db_user = String(process.env.DB_USER);
export const db_password = String(process.env.DB_PASSWORD);

export const PDB_NAME = String(process.env.PDB_NAME);
export const PDB_PORT = Number(process.env.PDB_PORT);
export const PDB_HOST = String(process.env.PDB_HOST);
export const PDB_USER = String(process.env.PDB_USER);
export const PDB_PASSWORD = String(process.env.PDB_PASSWORD);


export const LOG_DIR = String(process.env.LOG_DIR);
export const SECRET_KEY = String(process.env.SECRET_KEY);
export const NODE_ENV = String(process.env.NODE_ENV);
export const LOG_FORMAT = String(process.env.LOG_FORMAT);
export const ORIGIN = String(process.env.ORIGIN);
export const PORT = Number(process.env.PORT);

