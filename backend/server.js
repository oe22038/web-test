const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.post("/api/login", (req, res) => {
    const uid = Date.now();
    res.json({userID: uid});
});

app.get("/user/:id", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/homepage.html'));
});

app.use(express.static('../frontend'));

app.listen(port, () => {
    console.log(`localhost: http://localhost:${port}`);
});