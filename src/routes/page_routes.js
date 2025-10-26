import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// __dirnameをESM形式でも使えるように設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, "../../public");

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

router.get("/user/:id", (req, res) => {
    res.sendFile(path.join(frontendPath, 'homepage.html'));
});

router.use(express.static(frontendPath));

export default router;