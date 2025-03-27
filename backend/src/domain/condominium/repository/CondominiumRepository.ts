import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export class CondominiumRepository {
  static async findByName(nome: string) {
    return await prisma.condominium.findUnique({
      where: { nome_condominio: nome },
    });
  }

  static async findByCepAndNumber(cep: number, numero: number) {
    return await prisma.condominium.findFirst({
      where: {
        cep: cep,
        numero: numero,
      },
    });
  }
}
