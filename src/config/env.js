// 環境変数をまとめて管理
import dotenv from "dotenv";
dotenv.config(); // .envを読み込む

export const ENV = {
  PORT: process.env.PORT,

  DB: {
    HOST: process.env.POSTGRES_HOST,
    PORT: process.env.POSTGRES_PORT,
    USER: process.env.POSTGRES_USER,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    NAME: process.env.POSTGRES_NAME,
  }
};