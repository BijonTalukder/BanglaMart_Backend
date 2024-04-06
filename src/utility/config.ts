import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });
export const Dotconfig={
    DataBaseUrl:process.env.DATABASE_URL,
    Port:process.env.PORT||5000
};