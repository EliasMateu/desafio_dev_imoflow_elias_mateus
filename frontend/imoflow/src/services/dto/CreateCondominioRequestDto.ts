export interface CreateCondominioRequestDto {
  id_imovel: string
  nome_condominio: string
  cep: string
  rua: string
  numero: number | string
  complemento?: string
  cidade: string
  estado: string
  tipo: CondominiumType
}

export enum CondominiumType {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}
