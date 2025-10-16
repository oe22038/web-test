import express from "express";
import path from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";

import pool from "./db.js"; // db.jsをimport

const app = express();
app.use(bodyParser.json());

// __dirnameをESM形式でも使えるように設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, "../frontend");

//ログイン処理
app.post("/api/login", async (req, res) => {
    const {userName, passWord} = req.body;

    try {
        //db検索
        const result = await pool.query(
            `SELECT * FROM users WHERE username = $1;`,
            [userName]
        );

        if(result.rows.length > 0) {
            // 存在している場合
            const user = result.rows[0];
            console.log(user);
            // 検索したデータをオブジェクトで取得
            if(user.password === passWord) { // ===で厳密に
                return res.json({user: user.username, status: "login_ok", message: "ログイン成功"});
            } 
            else {
                return res.json({user: user.username, status: "error", message: "パスワードが違います"});
            }
        }
        else {
            // ユーザ登録されてない
            await pool.query(
                `INSERT INTO users (username, password) VALUES ($1, $2)`,
                [userName, passWord]
            );
            return res.json({user: user.username, status: "signup_ok", message: "新規登録完了"});
        }
    }
    catch(err) {
        console.error(err);
        res.status(500).json({user: user.username, status: "error", message: "サーバエラー"});
    }
});

app.get("/user/:id", async (req, res) => {
    await res.sendFile(path.join(frontendPath, 'homepage.html'));
});

app.get("/api/users", async (req, res) => {
    // DBの内容取得
    const db = await pool.query("SELECT * FROM users");
    res.json(db.rows);
});

app.use(express.static(frontendPath));

const port = 3000;
app.listen(port, () => {
    console.log(`localhost: http://localhost:${port}`);
});

// 初回起動時にテーブルを作成
(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255),
      password VARCHAR(255)
    );
  `);
})();