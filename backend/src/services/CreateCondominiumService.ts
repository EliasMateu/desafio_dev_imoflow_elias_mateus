import { PrismaClient, CondominiumType } from "@prisma/client";
import { CreateCondominiumRequestDto } from "../dtos/CreateCondominiumRequestDto";
import { CreateCondominiumResponseDto } from "../dtos/CreateCondominiumResponseDto";
import { CustomError } from "../utils/CustomError";
import { CondominiumBusinessRules } from "../business/CondominiumBusinessRules";

const prisma = new PrismaClient();

class CreateCondominiumService {
  constructor(private businessRules: CondominiumBusinessRules) {}

  async execute(
    data: CreateCondominiumRequestDto
  ): Promise<CreateCondominiumResponseDto> {
    await this.businessRules.validate({
      nome_condominio: data.nome_condominio,
      cep: data.cep,
      numero: data.numero,
    });

    const tipo: CondominiumType = data.tipo;

    try {
      return await prisma.condominium.create({
        data: {
          id_imovel: data.id_imovel,
          nome_condominio: data.nome_condominio,
          cep: data.cep,
          rua: data.rua,
          numero: data.numero,
          complemento: data.complemento ?? "",
          cidade: data.cidade,
          estado: data.estado,
          tipo: tipo,
        },
      });
    } catch (error) {
      console.error("Database error:", error);
      throw new CustomError(
        500,
        "Erro ao criar condomínio",
        {},
        "DATABASE_ERROR"
      );
    }
  }
}

export { CreateCondominiumService };
