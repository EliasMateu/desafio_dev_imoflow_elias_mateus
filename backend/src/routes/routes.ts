import { Router, Request, Response } from "express";
import { CreateCondominiumController } from "../presentation/condominium/CreateCondominiumController";

export const router = Router();
const createCondominiumController = new CreateCondominiumController();

router.post(
  "/condominium",
  CreateCondominiumController.validation,
  async (req: Request, res: Response) => {
    await createCondominiumController.handle(req, res);
  }
);
