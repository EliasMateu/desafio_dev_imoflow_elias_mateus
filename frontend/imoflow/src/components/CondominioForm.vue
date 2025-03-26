<template>
  <div class="container mt-4">
    <h2 class="text-center">Cadastro de Condomínio</h2>

    <ImovelSelect @selecionado="selecionarImovel" />

    <form @submit.prevent="salvarCondominio">
      <FormFields :form="form" :isDisabled="isFormDisabled" />
    </form>
    <button type="submit" class="btn btn-primary" @click="salvarCondominio">Salvar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cadastrarCondominio } from '@/services/condominioService'
import {
  type CreateCondominioRequestDto,
  CondominiumType,
} from '@/services/dto/CreateCondominioRequestDto'
import ImovelSelect from '@/components/ImovelSelect.vue'
import FormFields from '@/components/FormFields.vue'

const imovelSelecionado = ref<string>('')
const isFormDisabled = ref<boolean>(true)
const form = ref<Omit<CreateCondominioRequestDto, 'id_imovel'>>({
  nome_condominio: '',
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  cidade: '',
  estado: '',
  tipo: CondominiumType.HORIZONTAL,
})

const estados = ref<string[]>(['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA'])

const selecionarImovel = (id: string) => {
  imovelSelecionado.value = id
  isFormDisabled.value = !id
}

const salvarCondominio = async () => {
  if (!imovelSelecionado.value) {
    alert('Selecione um imóvel antes de salvar.')
    return
  }

  const payload: CreateCondominioRequestDto = {
    ...form.value,
    id_imovel: imovelSelecionado.value,
  }

  try {
    await cadastrarCondominio(payload)
    alert('Cadastro realizado com sucesso!')
    form.value = {
      nome_condominio: '',
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      cidade: '',
      estado: '',
      tipo: CondominiumType.HORIZONTAL,
    }
    imovelSelecionado.value = ''
    isFormDisabled.value = true
  } catch (error) {
    alert('Erro ao cadastrar condomínio.')
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
}

.form-label {
  font-weight: bold;
}

.form-control,
.form-select {
  border-radius: 5px;
}

button {
  margin-top: 10px;
}
</style>
