export interface CreateCondominioRequestDto {
  id_imovel: string
  nome_condominio: string
  cep: number
  rua: string
  numero: number
  complemento?: string
  cidade: string
  estado: string
  tipo: CondominiumType
}

export enum CondominiumType {
  HORIZONTAL = 'HORIZONTAL',
  VERTICAL = 'VERTICAL',
}
