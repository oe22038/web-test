import express from "express";
import createError from "http-errors";

import htmlRoutes from "./src/routes/page_routes.js";
import routes from "./src/routes/index.js";
import { ENV } from "./src/config/env.js";

const app = express();

app.use(express.json());

//ルーティング
app.use("/", htmlRoutes);
app.use("/api", routes);

//url見つからない
app.use((req, res, next) => {
    next(createError(404, `指定したURL（${req.originalUrl}）が見つかりません`));
});

//エラーハンドラ
app.use((err, req, res, next) => {
    console.error(`[Error] ${err.status || 500}: ${err.message}`);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "サーバ内部でエラーが発生しました。",
    });
});

app.listen(ENV.PORT, () => {
    console.log(`localhost: http://localhost:${ENV.PORT}`);
});