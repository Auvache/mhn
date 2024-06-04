import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import router from './router'

createApp(App)
    .use(router)
    .use(VueGtag,
        {
            appName: 'mhn',
            pageTrackerScreenviewEnabled: true,
            config: { id: 'G-4PEZTK9FCG'},
        },
        router
    )
    .mount('#app')
