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
    <div
      v-for="(label, key) in {
        nome_condominio: 'Nome do Condomínio',
        cep: 'CEP',
        rua: 'Rua',
        numero: 'Número',
        complemento: 'Complemento',
        cidade: 'Cidade',
      }"
      :key="key"
      class="mb-3"
    >
      <label class="form-label" :for="key">{{ label }}</label>
      <input
        :id="key"
        :type="key === 'cep' || key === 'numero' ? 'number' : 'text'"
        class="form-control"
        v-model="form[key]"
        :required="key !== 'complemento'"
      />
    </div>

    <div class="mb-3">
      <label class="form-label" for="estado">Estado</label>
      <select id="estado" class="form-select" v-model="form.estado" required>
        <option value="" disabled>Selecione</option>
        <option v-for="estado in estados" :key="estado" :value="estado">
          {{ estado }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Tipo do Condomínio</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="tipo-horizontal"
          v-model="form.tipo"
          :value="CondominiumType.HORIZONTAL"
        />
        <label class="form-check-label" for="tipo-horizontal">
          {{ CondominiumType.HORIZONTAL }}
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          id="tipo-vertical"
          v-model="form.tipo"
          :value="CondominiumType.VERTICAL"
        />
        <label class="form-check-label" for="tipo-vertical">
          {{ CondominiumType.VERTICAL }}
        </label>
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
