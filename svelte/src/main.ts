import { mount } from 'svelte'
import App from './App.svelte'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap'

import './app.css'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
