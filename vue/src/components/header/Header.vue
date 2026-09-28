<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Collapse } from 'bootstrap'

const themeKey = '001_modern_web_frameworks_vue_theme'

const savedTheme = localStorage.getItem(themeKey)

const theme = ref<'dark' | 'light'>(
  savedTheme === 'light' ? 'light' : 'dark'
)

// Apply theme
const applyTheme = () => {
  document.body.setAttribute('data-bs-theme', theme.value)
}

// Toggle theme
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem(themeKey, theme.value)
  applyTheme()
}

// Close mobile navbar
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

// Theme button click
const handleThemeClick = () => {
  toggleTheme()
  closeNavbar()
}

// Component mounted
onMounted(() => {
  applyTheme()
})
</script>

<template>
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
            <RouterLink to="/"
                        class="nav-link"
                        exact-active-class="active"
                        @click="closeNavbar">
              <span class="text-capitalize text-small-caps">
                <i class="fa-solid fa-house me-1"></i>
                <span>Home</span>
              </span>
            </RouterLink>
          </li>

          <!-- Page1 -->
          <li class="nav-item mx-1">
            <RouterLink to="/page1"
                        class="nav-link"
                        exact-active-class="active"
                        @click="closeNavbar">
              <span class="text-capitalize text-small-caps">
                <i class="fa-solid fa-face-smile me-1"></i>
                <span>Page1</span>
              </span>
            </RouterLink>
          </li>

          <!-- Page2 -->
          <li class="nav-item mx-1">
            <RouterLink to="/page2"
                        class="nav-link"
                        exact-active-class="active"
                        @click="closeNavbar">
              <span class="text-capitalize text-small-caps">
                <i class="fa-solid fa-globe me-1"></i>
                <span>Page2</span>
              </span>
            </RouterLink>
          </li>
        </ul>

        <!-- RIGHT -->
        <ul class="navbar-nav ms-auto me-0 me-sm-3">

          <!-- Theme -->
          <li class="nav-item mx-1">
            <button type="button"
                    class="nav-link border-0 bg-transparent"
                    @click="handleThemeClick"
                    title="Change theme"
                    aria-label="Change theme">
              <i class="fa-solid me-1 me-sm-0"
                :class="theme === 'dark' ? 'fa-sun' : 'fa-moon'"></i>
              <span class="d-sm-none">
                Change theme
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  text-decoration: underline;
  pointer-events: none;
}
</style>