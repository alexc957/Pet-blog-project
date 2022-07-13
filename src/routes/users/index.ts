import express, { Response, Request, Router } from "express";

const router = express.Router();

router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: "get /id" });
});

router.get("/", (req: Request, res: Response) => {
  res.json([]);
});

router.post("/", (req: Request, res: Response) => {
  res.json({});
});

router.put("/:id", (req: Request, res: Response) => {
  res.json({});
});

export default router;
