<script setup lang="ts">
import { CondominiumType } from '@/services/dto/CreateCondominioRequestDto'
import { defineProps } from 'vue'

const estados = [
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
]

const props = defineProps<{
  form: {
    nome_condominio: string
    cep: string
    rua: string
    numero: number
    complemento: string
    cidade: string
    estado: string
    tipo: CondominiumType
  }
  isDisabled: boolean
}>()

const condominiumTypes = Object.values(CondominiumType)
</script>

<template>
  <fieldset :disabled="isDisabled">
    <div class="mb-3">
      <label class="form-label">Nome do Condomínio</label>
      <input type="text" class="form-control" v-model="form.nome_condominio" required />
    </div>

    <div class="mb-3">
      <label class="form-label">CEP</label>
      <input type="text" class="form-control" v-model="form.cep" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Rua</label>
      <input type="text" class="form-control" v-model="form.rua" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Número</label>
      <input type="number" class="form-control" v-model="form.numero" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Complemento</label>
      <input type="text" class="form-control" v-model="form.complemento" />
    </div>

    <div class="mb-3">
      <label class="form-label">Cidade</label>
      <input type="text" class="form-control" v-model="form.cidade" required />
    </div>

    <div class="mb-3">
      <label class="form-label">Estado</label>
      <select class="form-select" v-model="form.estado" required>
        <option value="" disabled>Selecione</option>
        <option v-for="estado in estados" :key="estado" :value="estado">
          {{ estado }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Tipo do Condomínio</label>
      <select class="form-select" v-model="form.tipo" required>
        <option value="" disabled>Selecione o Tipo</option>
        <option v-for="tipo in condominiumTypes" :key="tipo" :value="tipo">
          {{ tipo }}
        </option>
      </select>
    </div>
  </fieldset>
</template>
