import express, { Response, Request, Router } from "express";

const userControllers = {
  getOne: (req: Request, res: Response) => {
    res.json({ message: "get /id" });
  },
  getAll: (req: Request, res: Response) => {
    res.json([]);
  },
  addOne: (req: Request, res: Response) => {
    res.json({});
  },
  updateOne: (req: Request, res: Response) => {
    res.json({});
  },
};

export default userControllers;
