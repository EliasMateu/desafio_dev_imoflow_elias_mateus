<script setup lang="ts">
import { CondominiumType } from '@/services/dto/CreateCondominioRequestDto'
import { computed } from 'vue'

const estados = computed(() => [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
])

const props = defineProps<{
  form: {
    nome_condominio: string
    cep: number
    rua: string
    numero: number
    complemento?: string
    cidade: string
    estado: string
    tipo: CondominiumType
  }
  isDisabled: boolean
}>()

const condominiumTypes = computed(() => Object.values(CondominiumType))
</script>

<template>
  <fieldset :disabled="isDisabled" class="w-100">
    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label" for="nome_condominio">Nome do Condomínio</label>
        <input
          id="nome_condominio"
          type="text"
          class="form-control"
          v-model="form.nome_condominio"
          required
        />
      </div>

      <div class="col-md-6">
        <label class="form-label" for="cep">CEP</label>
        <input id="cep" type="number" class="form-control" v-model="form.cep" required />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label" for="rua">Rua</label>
        <input id="rua" type="text" class="form-control" v-model="form.rua" required />
      </div>

      <div class="col-md-6">
        <label class="form-label" for="numero">Número</label>
        <input id="numero" type="number" class="form-control" v-model="form.numero" required />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label" for="complemento">Complemento</label>
        <input id="complemento" type="text" class="form-control" v-model="form.complemento" />
      </div>

      <div class="col-md-6">
        <label class="form-label" for="cidade">Cidade</label>
        <input id="cidade" type="text" class="form-control" v-model="form.cidade" required />
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6">
        <label class="form-label" for="estado">Estado</label>
        <select id="estado" class="form-select" v-model="form.estado" required>
          <option value="" disabled>Selecione</option>
          <option v-for="estado in estados" :key="estado" :value="estado">
            {{ estado }}
          </option>
        </select>
      </div>

      <div class="col-md-6">
        <label class="form-label">Tipo do Condomínio</label>
        <div class="d-flex">
          <div class="form-check me-4">
            <input
              class="form-check-input"
              type="radio"
              id="tipo-horizontal"
              v-model="form.tipo"
              :value="CondominiumType.HORIZONTAL"
            />
            <label class="form-check-label" for="tipo-horizontal"> Horizontals </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              id="tipo-vertical"
              v-model="form.tipo"
              :value="CondominiumType.VERTICAL"
            />
            <label class="form-check-label" for="tipo-vertical"> Vertical </label>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<style scoped>
.form-control,
.form-select {
  width: 100%;
}
</style>
