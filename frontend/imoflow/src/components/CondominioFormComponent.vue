<template>
  <div
    class="container-fluid container-md d-flex justify-content-center align-items-center flex-grow-1 py-5"
  >
    <div class="card p-4">
      <h2 class="text-center mb-4">Cadastro de Condomínio</h2>

      <ImovelSelect @selecionado="selecionarImovel" class="mb-4 w-100" />

      <form @submit.prevent="salvarCondominio" class="w-100">
        <FormFields :form="form" :isDisabled="!imovelSelecionado" />
        <button
          type="submit"
          class="btn btn-lg w-100 mt-4"
          :class="{ 'btn-primary': imovelSelecionado, 'btn-secondary': !imovelSelecionado }"
          :disabled="!imovelSelecionado"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ApiService } from '@/services/ApiService'
import { CondominiumType } from '@/services/dto/CreateCondominioRequestDto'
import ImovelSelect from '@/components/ImovelSelectComponent.vue'
import FormFields from '@/components/FormFieldsComponent.vue'

const imovelSelecionado = ref<string | null>(null)
const form = ref({
  nome_condominio: '',
  cep: 0,
  rua: '',
  numero: 0,
  complemento: '',
  cidade: '',
  estado: '',
  tipo: CondominiumType.HORIZONTAL,
})

const selecionarImovel = (id: string) => {
  imovelSelecionado.value = id
}

const salvarCondominio = async () => {
  if (!imovelSelecionado.value) return alert('Selecione um imóvel antes de salvar.')

  try {
    await ApiService.createCondominium({ ...form.value, id_imovel: imovelSelecionado.value })
    alert('Cadastro realizado com sucesso!')
    form.value = {
      nome_condominio: '',
      cep: 0,
      rua: '',
      numero: 0,
      complemento: '',
      cidade: '',
      estado: '',
      tipo: CondominiumType.HORIZONTAL,
    }
    imovelSelecionado.value = null
  } catch (error) {
    alert('Erro ao cadastrar condomínio.')
  }
}
</script>

<style scoped>
.card {
  max-width: 800px;
  width: 100%;
}
</style>
