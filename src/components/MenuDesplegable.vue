<script setup>
import { ref } from 'vue';

const menuItems = [
  "Encuesta A La Administración Municipal Y Operadores De Justicia",
  "Encuesta Sobre Necesidades Jurídicas",
  "Encuesta De Necesidades Jurídicas - Comunidades Étnicas",
  "Encuesta De Necesidades Jurídicas - Sector Educativo"
];

const handleClick = (item) => {
  alert(`Has seleccionado: ${item}`);
};

const isCollapsed = ref(true);

const toggleMenu = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <aside class="menu_desplegable" :class="{ 'collapsed': isCollapsed }">
    <header @click="toggleMenu" :class="{ 'collapsed': isCollapsed }">
      <i class="bi bi-list"></i>
      <p v-if="!isCollapsed">ENCUESTAS</p>
    </header>
    <ul v-if="!isCollapsed">
      <li v-for="item in menuItems" @click="handleClick(item)">
        <a>{{ item }}</a>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.menu_desplegable {
  height: 100vh;
  background-color: var(--color-darkBlue);
  color: var(--color-white);
  width: 350px;
  transition: 0.3s ease;

}

.menu_desplegable.collapsed {
    transition: 0.3s ease;
    width: 60px;
    color: var(--color-darkBlue);
    background-color: #00000000;
}

header {
  padding: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-size: 30px;
}

header p {
  font-size: 22px;
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  gap: 20px;
}

ul li {
  cursor: pointer;
  background-color: var(--color-white);
  color: var(--color-black);
  padding: 10px;
  border-radius: 10px 0px 10px 0px;
  transition: background-color 0.3s ease;
}

@media (max-width: 768px) {
  .menu_desplegable {
    width: 100%;
    max-width: none;
  }

  .menu_desplegable.collapsed {
    width: 60px;
    min-width: 60px;
  }
}
</style>