import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ApiService } from '@/services/ApiService'

interface Imovel {
  id_imovel: string
  categoria: string
  bairro: string
  cidade: string
  valorVenda: number
}

export const useImoveisStore = defineStore('imoveis', () => {
  const imoveis = ref<Imovel[]>([])
  const imovelSelecionado = ref<string>('')

  const carregarImoveis = async () => {
    try {
      const dados = await ApiService.getImoveis()
      imoveis.value = dados
        .filter((imovel: any) => imovel.categoria === 'Casa')
        .map((imovel: any) => ({
          id_imovel: imovel.id_imovel,
          categoria: imovel.categoria,
          bairro: imovel.bairro,
          cidade: imovel.cidade,
          valorVenda: imovel.valorVenda,
        }))
    } catch (error) {
      console.error('Erro ao carregar imóveis:', error)
    } finally {
    }
  }

  return {
    imoveis,
    imovelSelecionado,
    carregarImoveis,
  }
})
