import { CondominiumType } from "@prisma/client";

export interface CreateCondominiumRequestDto {
  id_imovel: string;
  nome_condominio: string;
  cep: number;
  rua: string;
  numero: number;
  complemento: string;
  cidade: string;
  estado: string;
  tipo: CondominiumType;
}
