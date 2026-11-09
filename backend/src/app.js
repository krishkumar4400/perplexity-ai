import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routes


export default app;
