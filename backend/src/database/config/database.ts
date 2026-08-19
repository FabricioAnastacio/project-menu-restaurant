import type { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '679301',
  database: 'DB_MENU_DELIVERY', 
  host: process.env.DB_HOST || 'dbdlibre',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

export default config;
