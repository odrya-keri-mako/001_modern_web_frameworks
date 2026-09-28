<script lang="ts">
  import Router from 'svelte-spa-router'

  import Header from './components/header/Header.svelte'
  import Footer from './components/footer/Footer.svelte'

  import { routes } from './routes'
</script>

<div class="page-container d-flex flex-column min-vh-100">
  <Header />
  <main class="position-relative flex-fill d-flex flex-column justify-content-center">
    <Router {routes} />
  </main>
  <Footer />
</div>