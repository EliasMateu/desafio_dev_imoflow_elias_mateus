import { Router, Request, Response } from "express";
import { CreateCondominiumController } from "./controllers/CreateCondominiumController";

export const router = Router();
const createCondominiumController = new CreateCondominiumController();

router.post("/condominium", async (req: Request, res: Response) => {
  await createCondominiumController.handle(req, res);
});
