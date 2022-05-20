import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory} from 'vue-router'

// import router from './router/router.js'
// import { ElMessage, ElLoading } from 'element-plus'
// import "element-plus/dist/index.css"
// import axios from 'axios'


const Home = { template: '<h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh<h1>' }
const routes = [
    { path: '/', component: Home},
    { path: '/test', component: Home}
  ]
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory("/"),
  
    routes, // short for `routes: routes`
  })
const app = createApp(App)
app.use(router)
// app.config.globalProperties.$message = ElMessage

// axios.defaults.baseURL = "http://localhost:3000"
// let loadingInstance = null
// axios.interceptors.request.use(config => {
//     loadingInstance = ElLoading.service({
//         fullscreen: true,
//         text: 'Loading'
//     })
//     return config
// })

// axios.interceptors.response.use(config => {
//     loadingInstance.close()
//     return config
// })

// app.config.globalProperties.$http = axios

app.mount('#app')
