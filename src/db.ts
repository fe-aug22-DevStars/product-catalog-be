import { Sequelize } from 'sequelize';

// eslint-disable-next-line max-len
export const sequelize = new Sequelize('mysql://43i9gys6l8tfydfer359:pscale_pw_UNobpbtq6k3GwuvL3pTr8KIcDJDbGTehHVykTgPMs5F@eu-central.connect.psdb.cloud/devices-database', {
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
});
