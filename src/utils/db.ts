import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
        }
    },
    dialectModule: require('mysql2'),
});