import * as userModels from "../models/user_model.js"

let uid = 0;

async function login(req, res) {
    const {userName, passWord} = req.body;

    try {
        //db検索
        const user = await userModels.searchUser(userName);

        if(user) {
            // 存在している場合
            console.log(user);

            // 検索したデータをオブジェクトで取得
            if(user.password === passWord) { // ===で厳密に
                return res.json({user: user.username, status: "login_ok", message: "ログイン成功"});
            } else {
                return res.json({user: user.username, status: "error", message: "パスワードが違います"});
            }
        } else {
            // ユーザ登録されてない
            await userModels.createUser(uid, userName, passWord);
            uid ++;

            return res.json({user: userName, status: "signup_ok", message: "新規登録完了"});
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({user: userName, status: "error", message: "サーバエラー"});
    }
}

async function getUsers(req, res) {
    try {
        const users = await userModels.getAllUsers();
        res.json(users);
    } catch(err) {
        res.status(500).json({message: "ユーザ取得エラー"});
    }
}

export {login, getUsers};