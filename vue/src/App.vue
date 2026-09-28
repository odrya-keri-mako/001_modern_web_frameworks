<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
</script>

<template>
  <div class="page-container d-flex flex-column min-vh-100">
    <Header />
    <main class="position-relative flex-fill d-flex flex-column justify-content-center">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>