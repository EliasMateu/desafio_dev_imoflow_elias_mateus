import axios from 'axios'
import type { CreateCondominioRequestDto } from '@/services/dto/CreateCondominioRequestDto'

const demoUrl = 'https://demo.imoflow.app.br/api'
const apiUrl = 'http://localhost:3000'

export const ApiService = {
  async getImoveis() {
    try {
      const response = await axios.get(`${demoUrl}/imoveis/comercio/Venda?t=${Date.now()}`)
      return response.data.imoveis
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error)
      throw error
    }
  },

  async createCondominium(data: CreateCondominioRequestDto) {
    try {
      await axios.post(`${apiUrl}/condominium`, data)
    } catch (error) {
      console.error('Erro ao cadastrar condomínio', error)
      throw error
    }
  },
}
