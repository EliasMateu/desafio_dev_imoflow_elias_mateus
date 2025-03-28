import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import App from './App.vue'
import router from './router'

import LoadingPageComponent from './components/LoadingPageComponent.vue'
import ModalComponent from './components/ModalComponent.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('LoadingPageComponent', LoadingPageComponent)
app.component('ModalComponent', ModalComponent)

app.mount('#app')
