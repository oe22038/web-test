const addBtn = document.getElementById("add");
const un = document.getElementById("un");
const pw = document.getElementById("pw");

let userInfo = [];

function saveInfo(userName, passWord) {
    const user = {
        "id": Date.now(),
        "userName": userName,
        "passWord": passWord
    };
    userInfo.push(user);
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

addBtn.addEventListener("click", e => {
    const userName = un.value.trim();
    const passWord = pw.value.trim();
    
    if(userName != "" && passWord != "") {
        saveInfo(userName, passWord);
        output();
    }

    un.value = "";
    pw.value = "";
});