<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import axios from 'axios'

const emit = defineEmits(['selecionado'])

const imoveis = ref<{ id_imovel: string }[]>([])
const imovelSelecionado = ref('')

const carregarImoveis = async () => {
  try {
    const response = await axios.get('https://demo.imoflow.app.br/api/imoveis/comercio/Venda')

    imoveis.value = response.data.imoveis
      .filter((imovel: any) => imovel.categoria === 'Casa')
      .map((imovel: any) => ({ id_imovel: imovel.id_imovel }))
  } catch (error) {
    console.error('Erro ao carregar imóveis:', error)
  }
}

const selecionarImovel = () => {
  emit('selecionado', imovelSelecionado.value)
}

onMounted(carregarImoveis)
</script>

<template>
  <div class="mb-3">
    <label for="imovel" class="form-label">Selecione um Imóvel</label>
    <select id="imovel" class="form-select" v-model="imovelSelecionado" @change="selecionarImovel">
      <option value="" disabled>Selecione</option>
      <option v-for="imovel in imoveis" :key="imovel.id_imovel" :value="imovel.id_imovel">
        {{ imovel.id_imovel }}
      </option>
    </select>
  </div>
</template>
