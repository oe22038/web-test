const loginBtn = document.getElementById("login");
const un = document.getElementById("un");
const pw = document.getElementById("pw");

let userInfo = [];
const uid = Date.now();

function saveInfo(userName, passWord) {
    const user = {
        "id": uid,
        "userName": userName,
        "passWord": passWord
    };
    userInfo.push(user);

    //DB保存
}

function output() {
    const out = document.getElementById("op");

    out.innerHTML = `
        <tr>
            <td>[ User Name ]</td>
            <td>[ Pass Word ]</td>
        </tr>
    `;

    userInfo.forEach(info => {
        const tr = document.createElement("tr");
        const un = document.createElement("td");
        const pw = document.createElement("td");

        un.textContent = info.userName;
        pw.textContent = info.passWord;

        tr.appendChild(un);
        tr.appendChild(pw);
        out.appendChild(tr);
    });
}

async function login() {
    const res = await fetch("./api/login", {method: "POST"});
    const data = await res.json();

    window.location.href = `/user/${data.userID}`;
}

loginBtn.addEventListener("click", e => {
    const userName = un.value.trim();
    const passWord = pw.value.trim();
    
    if(userName != "" && passWord != "") {
        saveInfo(userName, passWord);
        output();

        //home.htmlへ
        login();
    }
    else {
        alert("入力が正しくありません");
    }

    un.value = "";
    pw.value = "";
});