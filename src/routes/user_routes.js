import express from "express";
import * as userControllers from "../controllers/user_controller.js";

const router = express.Router();

router.post('/login', userControllers.login);
router.get('/users', userControllers.getUsers);

export default router;