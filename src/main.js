import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router';
import '@mdi/font/css/materialdesignicons.min.css';

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
