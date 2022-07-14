import express, { Response, Request, Router } from "express";
import userControllers from "./users.controllers";

const router: Router = express.Router();

router.get("/:id", userControllers.getOne);

router.get("/", userControllers.getAll);

router.post("/", userControllers.addOne);

router.put("/:id", userControllers.updateOne);

export default router;
