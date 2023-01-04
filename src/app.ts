import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv} from "dotenv";

import router from "./routers";

class App {
    public app: Application;

    constructor() {
        this.app = express()
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.use("/", router);
    }
}

const PORT: number = parseInt(process.env.PORT as string) || 5000;
const app = new App().app;
app.listen(PORT, () => {
    console.log('DB Connected')
    console.log(`Server in listening on port http://localhost:${PORT}`)
})