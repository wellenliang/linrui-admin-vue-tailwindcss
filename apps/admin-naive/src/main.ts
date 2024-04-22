import { createApp } from 'vue';
import App from '@/App.vue';
import { setupAssets } from '@/assets';

async function setupApp() {
  const app = createApp(App);

  setupAssets();
  app.mount('#app');
}

setupApp();
