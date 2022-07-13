/* import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });

  // use `console.dir` to print nested objects

  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
*/

import express, { Response, Request, Express } from "express";
import { PrismaClient } from "@prisma/client";

// const express = require("express");
const app: Express = express();
const port = 8080; // default port to listen

const prisma = new PrismaClient();

// define a route handler for the default home page
app.get("/", async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });

  return res.json(allUsers);
});

// start the Express server
app.listen(port, () => {
  console.info(`server started at http://localhost:${port}`);
});
