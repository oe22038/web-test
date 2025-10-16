function output(db) {
    const out = document.getElementById("op");

    out.innerHTML = `
        <tr>
            <td>[ User Name ]</td>
            <td>[ Pass Word ]</td>
        </tr>
    `;

    db.forEach(info => {
        const tr = document.createElement("tr");
        const un = document.createElement("td");
        const pw = document.createElement("td");

        un.textContent = info.username;
        pw.textContent = info.password;

        tr.appendChild(un);
        tr.appendChild(pw);
        out.appendChild(tr);
    });
}

async function loadDB() {
    const response = await fetch('/api/users');
    console.log("jsonnnn");
    return await response.json(); //取得したdbを返す
} 

document.getElementById("show_db").addEventListener("click", async e => {
    const db = await loadDB();
    console.log(db);
    output(db);
});