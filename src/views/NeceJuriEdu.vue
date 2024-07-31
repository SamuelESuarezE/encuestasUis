<script setup>
    import MenuDesplegable from '@/components/MenuDesplegable.vue';
    import TituloForm from '@/components/TituloForm.vue';
    import TextInput from '@/components/preguntas/TextInput.vue';
    import Dropdown from '@/components/preguntas/Dropdown.vue';
    import Checklist from '@/components/preguntas/Checklist.vue';
    import Composite from '@/components/preguntas/Composite.vue';
</script>

<template>
    <main>
        <MenuDesplegable />
        <div class="form">
            <TituloForm titulo="ENCUESTA DE NECESIDADES JURÍDICAS - SECTOR EDUCATIVO" />
            <p>El Ministerio de Justicia y del Derecho viene adelantando, la asistencia técnica para promover la implementación, funcionamiento y sostenibilidad de la estrategia de los Sistemas Locales de Justicia a nivel municipal. El objetivo de esta encuesta es contribuir a la lectura del territorio a través de la identificación de los problemas que afectan a los estudiantes de las entidades educativas del municipio a través de la experiencia de <span style="color: red">rectores o coordinadores de convivencia escolar de Establecimientos Educativos.</span>
            </p>
            <br>
            <p>Por lo anterior, acudimos a su valiosa colaboración contestando la siguiente encuesta, <span style="color: red">solicitando que sus respuestas incluyan la información asociada a todas las sedes educativas de su establecimiento.</span> La información que usted nos suministre será utilizada únicamente con fines estadísticos y sus resultados se mostrarán de manera agregada en el documento denominado: “Lectura territorial y diagnóstico de conflictividades”, insumo fundamental para la construcción del Plan estratégico del Sistema Local de Justicia del municipio.</p>
            <br>
            <p>El análisis de estos resultados nos llevará a formular acciones para el fortalecimiento del acceso a la justicia en cada territorio, de ahí la importancia que el diligenciamiento de esta encuesta sea realizado por <span style="color: red">el rector o el coordinador de convivencia escolar,</span> luego no puede ser delegable, toda vez que las preguntas van orientadas a las características, competencias y funciones del cargo que se desempeña en cada caso.</p>
            <br>
            <p> Agradecemos de antemano su colaboración. </p>
            <hr class="initialDivision">
            <TextInput label="Ingresa tu nombre" id="p1"/>
            <Dropdown id="p2" label="Tipo de funcionario publico:" :options="
            [
                { value: 'res1', label: 'Juez/a' },
                { value: 'res2', label: 'Abogado/a' },
            ]
            " />
            <Checklist id="p3" label="Pregunta checklist" :options="[
                { value: 'res1', label: 'Una opcion'},
                { value: 'res2', label: 'Segunda opcion'},
                { value: 'res3', label: 'Tercera opcion'}
            ]"/>

            <Composite title="Pregunta compuesta" :sub-questions="
            [
            {
                id: '31.1',
                type: 'dropdown',
                label: 'Cosas',
                options: [
                    { value: 'res1', label: 'Cosa 1 compuesta' },
                    { value: 'res2', label: 'Cosa 2 compuesta' },
                ]
                },
                {
                id: '31.2',
                type: 'text',
                label: 'Ejemplo texto en compuesta'
                }
            ]
            "/>
        </div>
    </main>
</template>

<style scoped>
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

    @media screen and (max-width: 768px) {
       .form {
            width: 75%;
        }
    }
</style>