import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';

import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'System',
            cssLayer: false
        }
    }
});

app.component('pv-card', Card);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);

app.mount('#app');