import { Request, Response } from "express";
import { CreateCondominiumService } from "../../infrastructure/condominium/CreateCondominiumService";
import { CreateCondominiumRequestDto } from "../../infrastructure/condominium/dto/CreateCondominiumRequestDto";
import { validateRequest } from "../../middlewares/ValidateRequest";
import { CustomError } from "../../utils/CustomError";
import { CondominiumBusinessRules } from "../../infrastructure/condominium/business/CondominiumBusinessRules"; // Importe o CondominiumBusinessRules

class CreateCondominiumController {
  static validation = validateRequest(CreateCondominiumRequestDto);

  async handle(req: Request, res: Response) {
    try {
      const data: CreateCondominiumRequestDto = req.body;
      const businessRules = new CondominiumBusinessRules();
      const service = new CreateCondominiumService(businessRules);
      const result = await service.execute(data);

      return res.status(201).json(result);
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json(error.toJSON());
      }

      console.error("Unexpected error:", error);
      return res.status(500).json({
        statusCode: 500,
        error: "Internal Server Error",
      });
    }
  }
}

export { CreateCondominiumController };
