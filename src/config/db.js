import pkg from "pg";
const { Pool } = pkg;
import { ENV } from "./env.js";

const pool = new Pool({
  host: ENV.DB.HOST,   // .env に localhost を書く
  port: ENV.DB.PORT,
  user: ENV.DB.USER,
  password: ENV.DB.PASSWORD,
  database: ENV.DB.NAME,
});

export default pool;