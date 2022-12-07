module.exports = {
  development: {
    username: '43i9gys6l8tfydfer359',
    password: 'pscale_pw_UNobpbtq6k3GwuvL3pTr8KIcDJDbGTehHVykTgPMs5F',
    database: 'devices-database',
    host: 'eu-central.connect.psdb.cloud',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
  test: {
    username: '43i9gys6l8tfydfer359',
    password: 'pscale_pw_UNobpbtq6k3GwuvL3pTr8KIcDJDbGTehHVykTgPMs5F',
    database: 'devices-database',
    host: 'eu-central.connect.psdb.cloud',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
  production: {
    username: '43i9gys6l8tfydfer359',
    password: 'pscale_pw_UNobpbtq6k3GwuvL3pTr8KIcDJDbGTehHVykTgPMs5F',
    database: 'devices-database',
    host: 'eu-central.connect.psdb.cloud',
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  },
};
