import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config';
const isProduction = process.env.NODE_ENV === 'production';

// export const Database = new Sequelize({
//   database: DB_NAME,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   host: DB_HOST,
//   port: DB_PORT,
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: false,
//       rejectUnauthorized: false,
//     },
//   },
// });

export const LocalDB = new Sequelize({
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
});

export const DB = () => {
    if (isProduction) {
      // Database.authenticate()
      //   .then(() => {
      //     console.log("connected to production database successfully!");
      //   })
      //   .catch((error) => {
      //     console.log("DB connection for production failed");
      //   });
    } else {
      LocalDB.authenticate()
        .then(() => {
          console.log("connected to local database successfully!");
        })
        .catch((error) => {
          console.log("DB connection for local failed");
        });
    }
  };
  