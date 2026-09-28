<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="container-fluid bg-body-tertiary px-3 pt-2">
    <p class="fw-lighter fs-sm mb-2 text-center">
      &copy; Copyright&nbsp;&nbsp;2021-{{ currentYear }}
      Keri Informatics, Makó
    </p>
  </div>
</template>