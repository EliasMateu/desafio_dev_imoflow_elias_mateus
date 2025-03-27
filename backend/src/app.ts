import express from "express";
import cors from "cors";
import logger from "morgan";
import { router } from "./routes/routes";
import { ErrorHandler } from "./middlewares/ErrorHandler";

export const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api/v1", router);

app.use(ErrorHandler as unknown as express.ErrorRequestHandler);
