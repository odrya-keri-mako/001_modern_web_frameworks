<script lang="ts">
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
  import { Collapse } from 'bootstrap'

  const themeKey = '001_modern_web_frameworks_svelte_theme'

  let theme = $state<'dark' | 'light'>('dark')

  const applyTheme = () => {
    document.body.setAttribute('data-bs-theme', theme)
  }

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem(themeKey, theme)
    applyTheme()
  }

  const closeNavbar = () => {
    const navbar = document.getElementById('navbar_content')
    if (navbar?.classList.contains('show')) {
      const collapse = Collapse.getOrCreateInstance(
        navbar,
        { toggle: false }
      )
      collapse.hide()
    }
  }

  const handleThemeClick = () => {
    toggleTheme()
    closeNavbar()
  }

  onMount(() => {
    const savedTheme = localStorage.getItem(themeKey)
    theme = savedTheme === 'light' ? 'light' : 'dark'
    applyTheme()
  })
</script>

<nav class="navbar navbar-expand-sm bg-body-tertiary sticky-top">

  <div class="container-fluid">

    <!-- Hamburger -->
    <button class="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar_content"
            aria-controls="navbar_content"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Navbar content -->
    <div id="navbar_content"
         class="collapse navbar-collapse mt-3 mt-sm-0">

      <!-- LEFT -->
      <ul class="navbar-nav me-auto ms-0 ms-sm-3">

        <!-- Home -->
        <li class="nav-item mx-1">
          <a href="/"
             use:link
             use:active
             class="nav-link"
             onclick={closeNavbar}>
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-house me-1"></i>
              <span>Home</span>
            </span>
          </a>
        </li>

        <!-- Page1 -->
        <li class="nav-item mx-1">
          <a href="/page1"
             use:link
             use:active
             class="nav-link"
             onclick={closeNavbar}>
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-face-smile me-1"></i>
              <span>Page1</span>
            </span>
          </a>
        </li>

        <!-- Page2 -->
        <li class="nav-item mx-1">
          <a href="/page2"
             use:link
             use:active
             class="nav-link"
             onclick={closeNavbar}>
            <span class="text-capitalize text-small-caps">
              <i class="fa-solid fa-globe me-1"></i>
              <span>Page2</span>
            </span>
          </a>
        </li>
      </ul>

      <!-- RIGHT -->
      <ul class="navbar-nav ms-auto me-0 me-sm-3">

        <li class="nav-item mx-1">
          <button type="button"
                  class="nav-link border-0 bg-transparent"
                  onclick={handleThemeClick}
                  title="Change theme"
                  aria-label="Change theme">
            <i class="fa-solid me-1 me-sm-0"
               class:fa-sun={theme === 'dark'}
               class:fa-moon={theme === 'light'}></i>
            <span class="d-sm-none">
              Change theme
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  nav :global(.nav-link.active) {
    text-decoration: underline;
    pointer-events: none;
  }
</style>