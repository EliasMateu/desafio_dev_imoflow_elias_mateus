import { CondominiumRepository } from "../domain/condominio/repository/CondominiumRepository";
import { CustomError } from "../utils/CustomError";

class CondominiumBusinessRules {
  async validate(data: {
    nome_condominio: string;
    cep: number;
    numero: number;
  }) {
    const condominiumExistsByCepAndNumero =
      await CondominiumRepository.findByCepAndNumber(data.cep, data.numero);
    const condominiumAlreadyExists = await CondominiumRepository.findByName(
      data.nome_condominio
    );

    if (condominiumAlreadyExists) {
      throw new CustomError(
        409,
        "Já existe um condomínio com este nome",
        {},
        "name_already_exists"
      );
    }

    if (condominiumExistsByCepAndNumero) {
      throw new CustomError(
        409,
        "Já existe um condomínio com este CEP e número",
        {},
        "cep_and_number_already_exists"
      );
    }

    if (data.cep.toString().length < 8 || data.cep.toString().length > 8) {
      throw new CustomError(
        400,
        "CEP deve ter exatamente 8 dígitos",
        {},
        "cep_invalid"
      );
    }
  }
}

export { CondominiumBusinessRules };
