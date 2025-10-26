import pool from "../config/db.js";

async function searchUser(userName) {
    const result = await pool.query(
        `SELECT * FROM users WHERE username = $1;`,
        [userName]
    );
    return result.rows[0];
}

async function createUser(id, userName, passWord) {
    await pool.query(
        `INSERT INTO users (id, username, password) VALUES ($1, $2, $3)`,
        [id, userName, passWord]
    );
}

async function getAllUsers() {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
}

export {searchUser, createUser, getAllUsers};