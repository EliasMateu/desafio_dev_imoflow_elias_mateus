<template>
  <div class="loading-overlay">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* ✅ Fundo escuro semi-transparente para cobrir toda a tela */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro com transparência */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050; /* Garantir que fique sobre tudo */
}

/* ✅ Animação de carregamento */
.loading {
  text-align: center;
}

.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #fff; /* Agora fica branco para melhor contraste */
  margin: 4px;
  animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
}

.loading span:nth-child(1) {
  animation-delay: 0.1s;
}

.loading span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading span:nth-child(3) {
  animation-delay: 0.3s;
}

.loading span:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes dots {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
}
</style>
