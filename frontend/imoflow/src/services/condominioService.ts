import api from './api'
import type { CreateCondominioRequestDto } from './dto/CreateCondominioRequestDto'

export const cadastrarCondominio = async (data: CreateCondominioRequestDto): Promise<void> => {
  try {
    await api.post('/condominio', data)
  } catch (error) {
    console.error('Erro ao cadastrar condomínio', error)
    throw error
  }
}
