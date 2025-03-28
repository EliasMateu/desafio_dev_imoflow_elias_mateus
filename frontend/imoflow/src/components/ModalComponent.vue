<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <button class="btn btn-primary" @click="closeModal">Fechar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: Boolean,
  title: String,
  message: String,
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.modal-title {
  font-size: 18px;
  font-weight: bold;
}

.modal-message {
  font-size: 14px;
  margin-top: 10px;
}
</style>
