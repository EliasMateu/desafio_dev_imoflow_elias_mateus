<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import CondominioFormComponent from '@/components/CondominioFormComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <HeaderComponent />
    <main class="flex-grow-1">
      <CondominioFormComponent />
    </main>
    <FooterComponent />
  </div>
</template>
