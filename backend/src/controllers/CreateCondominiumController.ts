import { Request, Response } from "express";
import { CreateCondominiumService } from "../services/CreateCondominiumService";
import { CreateCondominiumRequestDto } from "../dtos/CreateCondominiumRequestDto";

class CreateCondominiumController {
  async handle(req: Request, res: Response) {
    try {
      const data: CreateCondominiumRequestDto = req.body;

      const createCondominiumService = new CreateCondominiumService();
      const condominium = await createCondominiumService.execute(data);

      return res.status(201).json(condominium);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
      } else {
        return res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  }
}

export { CreateCondominiumController };
