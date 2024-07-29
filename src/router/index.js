import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [    
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/administracion_municipal_y_operadores_de_justicia',
      name: 'administracion_municipal_y_operadores_de_justicia',
      component: () => import('../views/AdminMuniOpJ.vue')
    },
    {
      path: '/necesidades_juridicas',
      name: 'necesidades_juridicas',
      component: () => import('../views/NeceJuri.vue')
    },
    {
      path: '/necesidades_juridicas_comunidades_etnicas',
      name: 'necesidades_juridicas_comunidades_etnicas',
      component: () => import('../views/NeceJuriEtnicas.vue')
    },
    {
      path: '/necesidades_juridicas_sector_educativo',
      name: 'necesidades_juridicas_sector_educativo',
      component: () => import('../views/NeceJuriEdu.vue')
    },
    {
      path: '/encuesta_finalizada',
      name: 'encuesta_finalizada',
      component: () => import('../views/Gracias.vue')
    }
  ]
})

export default router
