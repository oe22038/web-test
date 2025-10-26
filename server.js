import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/index.js";
import { ENV } from "./src/config/env.js";

const app = express();
app.use(bodyParser.json());

app.use("/", routes);

app.listen(ENV.PORT, () => {
    console.log(`localhost: http://localhost:${ENV.PORT}`);
});