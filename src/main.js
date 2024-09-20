import { createApp } from 'vue'
import './style.css'


import App from './App.vue'

//createApp(App).mount('#app')

import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'


import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

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
app.component('pv-menubar', Menubar);
app.component('pv-table', DataTable);
app.component('pv-column', Column);

app.mount('#app');