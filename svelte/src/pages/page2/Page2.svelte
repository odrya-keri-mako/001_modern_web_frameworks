<script lang="ts">
  import { common } from '../../state/common.svelte'

  const title = 'page 2'
</script>

<div class="container">
  <h1 class="text-center text-capitalize display-1">
    {common.commonTitle}
  </h1>

  <h4 class="page-title text-center text-capitalize display-4">
    <i class="fa-solid fa-globe me-1"></i>
    <span>{title}</span>
  </h4>
</div>

<style>
  .page-title {
    color: green;
  }
</style>