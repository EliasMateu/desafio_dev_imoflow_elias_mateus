import { PrismaClient, CondominiumType } from "@prisma/client";
import { CreateCondominiumRequestDto } from "../dtos/CreateCondominiumRequestDto";
import { CreateCondominiumResponseDto } from "../dtos/CreateCondominiumResponseDto";

const prisma = new PrismaClient();

class CreateCondominiumService {
  async execute(
    data: CreateCondominiumRequestDto
  ): Promise<CreateCondominiumResponseDto> {
    const tipo: CondominiumType = data.tipo;

    const newCondominium = await prisma.condominium.create({
      data: {
        id_imovel: data.id_imovel,
        nome_condominio: data.nome_condominio,
        cep: data.cep,
        rua: data.rua,
        numero: data.numero,
        complemento: data.complemento,
        cidade: data.cidade,
        estado: data.estado,
        tipo: tipo,
      },
    });

    return newCondominium;
  }
}

export { CreateCondominiumService };
