import { CondominiumType } from "@prisma/client";
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
} from "class-validator";

export class CreateCondominiumRequestDto {
  @IsString()
  @IsNotEmpty({ message: "Campo obrigatório" })
  id_imovel!: string;

  @IsString()
  @IsNotEmpty({ message: "Campo obrigatório" })
  @Length(3, 100, {
    message: "Nome do condomínio deve ter entre 3 e 100 caracteres",
  })
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: "Nome do condomínio deve conter apenas letras e números",
  })
  nome_condominio!: string;

  @IsNumber()
  @IsNotEmpty({ message: "Campo obrigatório" })
  cep!: number;

  @IsString()
  @IsNotEmpty({ message: "Campo obrigatório" })
  @Length(3, 100)
  rua!: string;

  @IsNumber()
  @IsNotEmpty({ message: "Campo obrigatório" })
  numero!: number;

  @IsString()
  @Length(0, 100)
  @IsOptional()
  complemento?: string;

  @IsString()
  @IsNotEmpty({ message: "Campo obrigatório" })
  @Length(3, 100)
  cidade!: string;

  @IsString()
  @IsNotEmpty({ message: "Campo obrigatório" })
  @Length(2, 2, { message: "Estado deve ter exatamente 2 dígitos" })
  @Matches(/^[A-Z]+$/, {
    message: "Estado deve conter apenas letras maiúsculas",
  })
  estado!: string;

  @IsNotEmpty({ message: "Campo obrigatório" })
  @IsEnum(CondominiumType)
  tipo!: CondominiumType;
}
