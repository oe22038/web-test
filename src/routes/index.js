import express from "express";
import user_routes from "./user_routes.js";
import page_routes from "./page_routes.js";

const router = express.Router();

router.use("/api", user_routes);
router.use("/", page_routes);

export default router;