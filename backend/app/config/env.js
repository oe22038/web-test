// 環境変数をまとめて管理するファイル
import dotenv from "dotenv";
dotenv.config(); // .envを読み込む

// 各値を定義（デフォルト値も設定可能）
export const ENV = {
  PORT: process.env.PORT || 3000,

  DB: {
    HOST: process.env.POSTGRES_HOST || "localhost",
    PORT: process.env.POSTGRES_PORT || 5432,
    USER: process.env.POSTGRES_USER || "user",
    PASSWORD: process.env.POSTGRES_PASSWORD || "password",
    NAME: process.env.POSTGRES_NAME || "postgres",
  },

  SECURITY: {
    JWT_SECRET: process.env.JWT_SECRET || "default-secret",
    SALT_ROUNDS: Number(process.env.SALT_ROUNDS) || 10,
  },
};
