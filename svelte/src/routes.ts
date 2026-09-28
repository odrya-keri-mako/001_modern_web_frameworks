import Home from './pages/home/Home.svelte'
import Page1 from './pages/page1/Page1.svelte'
import Page2 from './pages/page2/Page2.svelte'

export const routes = {
  '/': Home,
  '/page1': Page1,
  '/page2': Page2,
  '*': Home
}