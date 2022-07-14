import { Request, Response, NextFunction } from "express";

const indexMiddlewares = {
  logRequests: (req: Request, res: Response, next: NextFunction) => {
    const message = `${req.method} ${req.path} - ${req.ip}`;

    console.log(message);
    next();
  },
};

export default indexMiddlewares;
