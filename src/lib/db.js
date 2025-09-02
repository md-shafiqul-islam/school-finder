import mysql from "mysql2/promise";

export function connectDB() {
  if (!global.__mysqlPool) {
    global.__mysqlPool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT) || 3306,
      connectionLimit: 10,
    });
  }
  return global.__mysqlPool;
}
