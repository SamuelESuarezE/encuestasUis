<script setup>
import MenuDesplegable from "@/components/MenuDesplegable.vue";
import TituloForm from "@/components/TituloForm.vue";
// import TextInput from '@/components/preguntas/TextInput.vue';
// import Dropdown from '@/components/preguntas/Dropdown.vue';
// import Checklist from '@/components/preguntas/Checklist.vue';
// import Composite from '@/components/preguntas/Composite.vue';
import QuestionItem from "@/components/QuestionItem.vue";
import BackHome from "@/components/BackHome.vue";
import { reactive, ref } from "vue";
import {format} from '@formkit/tempo'
import adminMunicipal from "../assets/surveyNew01.json";

const formData1 = reactive({
  "nroencuesta": 1,
  "idsurvey" : 1,
  "fecha": "2024-08-18",
  "hora": "HH:MM:SS",
  "responses": [
    {
      "qid": "P1",
      "qfather": "",
      "response": [
          {
              "idoptresponse": 1,
              "textoptresponse" : "xxxxxxxx",
              "responseuser": "xxxx"
          }
      ]
    }
  ]
});

async function submitForm() {
  formData1.fecha = format(new Date(), 'YYYY-MM-DD')
  formData1.hora = format(new Date(), 'HH:mm')
  console.log(formData1)
}

</script>

<template>

  <main>
    <BackHome></BackHome>
    <form @submit.prevent="onSubmit" class="form">
      <TituloForm
        titulo="ENCUESTA A LA ADMINISTRACIÓN MUNICIPAL Y OPERADORES DE JUSTICIA"
      />
      <p>
        El Ministerio de Justicia y del Derecho viene adelantando, la asistencia
        técnica para promover la implementación y operación de la estrategia
        Sistemas Locales de Justicia a nivel municipal. El objetivo de esta
        encuesta es contribuir a la lectura del territorio a través de la
        identificación de los actores/operadores que hacen parte de la oferta de
        justicia a nivel local, el reconocimiento de sus capacidades
        institucionales, la identificación de las barreras de acceso a la
        justicia y las conflictividades.
      </p>
      <br />
      <p>
        Por lo anterior, solicitamos su valiosa colaboración contestando la
        siguiente encuesta. La información que usted nos suministre será
        utilizada únicamente con fines estadísticos y sus resultados se
        mostrarán de manera agregada en el documento denominado: “Lectura
        territorial y diagnóstico de conflictividades”, e insumo fundamental
        para la construcción del Plan estratégico del Sistema Local de Justicia
        del municipio.
      </p>
      <br />
      <p>
        El análisis de estos resultados, nos llevaran a formular acciones para
        el fortalecimiento del acceso a la justicia en cada territorio, de ahí
        la importancia que el diligenciamiento de esta encuesta sea realizado
        por el actor / operador de justicia, labor que no se puede delegar, toda
        vez que las preguntas van orientadas a las características, competencias
        y funciones del cargo que se desempeña en cada caso.
      </p>
      <br />
      <p>
        Agradecemos de antemano su colaboración. Tiempo estimado para su
        diligenciamiento 60 minutos.
      </p>
      <hr class="initialDivision" />

      <div v-for="chapter in adminMunicipal.chapters" :key="chapter.id" class="chapter">
        <h2 class="chapter_title">Capitulo {{ chapter.chapterNumber }}. {{ chapter.chapterTitle }}</h2>
        <QuestionItem
          v-for="question in chapter.questions"
          :key="question.id"
          :question="question"
          v-model="formData1.responses[question.questionNumber]"
        />

    </div>
      <button type="submit" @click="submitForm" >Submit</button>

    </form>
  </main>

</template>

<style scoped>

.chapter_title {
  background-color: var(--color-darkBlue);
  color: var(--color-white);
  line-height: 40px;
  margin-bottom: 20px;
}

main {
  display: flex;
  justify-content: center;
  height: auto;
}

.form {
  margin-block: 50px;
  width: 70%;
  text-align: justify;
}

.initialDivision {
  margin-top: 30px;
  margin-bottom: 30px;
  border-top: 1px solid #ccc;
}

@media (max-width: 1200px) {
  .form {
    width: 85%;
  }

  .chapter_title {
    font-size: 1.1rem;
    text-align: left;
    line-height: 25px;
  }
}
</style>
