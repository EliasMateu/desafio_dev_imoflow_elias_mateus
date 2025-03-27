import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/CustomError";

export function ErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.toJSON());
  }

  return res.status(500).json({
    statusCode: 500,
    error: "Internal Server Error",
  });
}
