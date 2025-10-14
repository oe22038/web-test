/*
dbからデータ取得　→　表で表示

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
*/