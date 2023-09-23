import './index.css'
import './style.css'
import "animate.css/animate.min.css";

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth, } from 'vuefire'
import { initializeApp } from 'firebase/app'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
const firebaseConfig = {
    apiKey: "AIzaSyDFBqzzg8rSz4XjTCURBN8RX7-EjRE71_8",
    authDomain: "firbasevue-717a3.firebaseapp.com",
    projectId: "firbasevue-717a3",
    storageBucket: "firbasevue-717a3.appspot.com",
    messagingSenderId: "378403902494",
    appId: "1:378403902494:web:447bacc6e9c31a05ceca0f",
    measurementId: "G-0M9EP0LBK0"
}

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)

app.use(VueFire, {
    firebaseApp: initializeApp(firebaseConfig),
    modules: [
        // ... other modules
        VueFireAuth(),
    ],
})
app.mount('#app')