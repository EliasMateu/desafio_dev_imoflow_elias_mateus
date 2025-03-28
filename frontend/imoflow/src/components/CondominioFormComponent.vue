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

  <LoadingPageComponent v-if="loading" />

  <ModalComponent
    :show="showModal"
    :title="modalTitle"
    :message="modalMessage"
    @close="showModal = false"
  />
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ApiService } from '@/services/ApiService'
import { CondominiumType } from '@/services/dto/CreateCondominioRequestDto'
import ImovelSelect from '@/components/ImovelSelectComponent.vue'
import FormFields from '@/components/FormFieldsComponent.vue'
import LoadingPageComponent from './LoadingPageComponent.vue'
import ModalComponent from './ModalComponent.vue'

const loading = ref(false)
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

const showModal = ref(false)
const modalTitle = ref('')
const modalMessage = ref('')

const salvarCondominio = async () => {
  if (!imovelSelecionado.value) return alert('Selecione um imóvel antes de salvar.')

  loading.value = true

  try {
    await ApiService.createCondominium({ ...form.value, id_imovel: imovelSelecionado.value })
    loading.value = false
    modalTitle.value = 'Sucesso'
    modalMessage.value = 'Cadastro realizado com sucesso!'
    showModal.value = true
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
  } catch (error: any) {
    loading.value = false
    modalTitle.value = 'Erro'
    modalMessage.value = error.response?.data?.error || 'Erro ao cadastrar o condomínio.'
    showModal.value = true
  }
}
</script>

<style scoped>
.card {
  max-width: 800px;
  width: 100%;
}
</style>
