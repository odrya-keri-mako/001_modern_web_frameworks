<script setup lang="ts">
import { useCommon } from '../../composables/useCommon'

const { commonTitle } = useCommon()

const title = 'home'
</script>

<template>
  <div class="container">

    <h1 class="text-center text-capitalize display-1">
      {{ commonTitle }}
    </h1>

    <h4 class="page-title text-center text-capitalize display-4">
      <i class="fa-solid fa-house me-1"></i>
      <span>{{ title }}</span>
    </h4>

  </div>
</template>

<style scoped>
.page-title {
  color: red;
}
</style>