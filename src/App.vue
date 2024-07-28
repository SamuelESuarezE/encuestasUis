<script setup>

import { RouterLink, RouterView } from 'vue-router'

    const menuItems = {
        "01": "Encuesta A La Administración Municipal Y Operadores De Justicia",
        "02": "Encuesta Sobre Necesidades Jurídicas",
        "03": "Encuesta De Necesidades Jurídicas - Comunidades Étnicas",
        "04": "Encuesta De Necesidades Jurídicas - Sector Educativo"
    }

</script>

<template>
<main>
    <img src="../public/LogoMinisteriodeJusticia.png" alt="Logo Ministerio Justicia">
    <div class="encuestas__container">

        <ul>
            <li v-for = "[key, value] in Object.entries(menuItems)">
                <div class="number">{{key}}</div>
                <a href="">{{ value }}</a>
            </li>

        </ul>

    </div>

</main>

    
</template>

<style>

    main{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }

    main img{
        width: 500px;
    }

    .encuestas__container {
        width: 700px;
        height: 300px;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        height: 100%;
        border: solid 1px var(--color-gray);
        border-top: none;
        border-inline: none;
        background-color: var(--color-white);
        
    }

    ul li:hover{
        background-color: var(--color-grayLight);
        transition: 0.3s ease;

    }

    ul li{

        display: flex;
        width: 700px;
        align-items: center;
        height: 25%;
        font-size: 18px;
        border: solid 1px var(--color-gray);
        border-bottom: none;

    }

    a {
        text-decoration: none; 
        color: black; 
    }

    .number{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-weight: bold;
        color: var(--color-gray)
    }




</style>

