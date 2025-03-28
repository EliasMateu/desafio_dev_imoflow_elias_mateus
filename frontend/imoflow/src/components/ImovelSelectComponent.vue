<template>
  <div class="mb-3">
    <label class="form-label">Selecione um Imóvel</label>
    <select
      class="form-select"
      v-model="imovelSelecionado"
      @change="$emit('selecionado', imovelSelecionado)"
    >
      <option value="" disabled>Selecione</option>
      <!-- Alterado para value="" -->
      <option v-for="imovel in imoveis" :key="imovel.id_imovel" :value="imovel.id_imovel">
        {{ imovel.categoria }} - {{ imovel.bairro }}, {{ imovel.cidade }} - R$:
        {{ imovel.valorVenda }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useImoveisStore } from '@/stores/UseImoveisStore'
import { storeToRefs } from 'pinia'

const imoveisStore = useImoveisStore()
const { imoveis } = storeToRefs(imoveisStore)
const { carregarImoveis } = imoveisStore

const imovelSelecionado = ref('')

onMounted(async () => {
  try {
    await carregarImoveis()
  } catch (error) {
    console.error('Erro ao carregar imóveis:', error)
  }
})
</script>
