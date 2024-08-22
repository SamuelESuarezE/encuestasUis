import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

export const formData = reactive({
    idSurvey: 1,
    nameSurvey: "ENCUESTA A LA ADMINISTRACION MUNICIPAL Y OPERADORES DE JUSTICIA",
    responses: {}
  });

export const submitForm = () => {
    console.log(formData)
}