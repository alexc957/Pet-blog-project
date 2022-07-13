import express, { Response, Request, Express } from "express";
import { PrismaClient } from "@prisma/client";
import path from "path";

import userRouter from "./routes/users/index";
// const express = require("express");
const app: Express = express();
const port = 8080; // default port to listen

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/user", userRouter);

const prisma = new PrismaClient();

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.get("/profile", (req: Request, res: Response) => {
  res.render("users/profile");
});

// start the Express server
app.listen(port, () => {
  console.info(`server started at http://localhost:${port}`);
});
