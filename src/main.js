import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDateInput } from 'vuetify/labs/VDateInput'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'
import './assets/main.css'

const vuetify = createVuetify({
  components: {
    ...components,
    VDateInput,
  },
  directives,
  theme: {
    defaultTheme: 'classTheme',
    themes: {
      classTheme: {
        dark: false,
        colors: {
          primary: '#5da9ff',
          secondary: '#dcedff',
          background: '#edf5ff',
          surface: '#ffffff',
          'surface-variant': '#eaf3ff',
          info: '#5da9ff',
        },
      },
    },
  },
  defaults: {
    VAppBar: {
      elevation: 1,
    },
    VCard: {
      elevation: 2,
      rounded: 'lg',
    },
    VBtn: {
      rounded: 'lg',
    },
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
