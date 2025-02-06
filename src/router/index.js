import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/Contador',
      name: 'Contador',
      component: () => import('../modules/Contador/components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../modules/listaDeTareas/components/lista_de_tareas.vue'),
    },
    {
      path: '/popos',
      name: 'popos',
      component: () => import('../modules/registro/views/ResgistroView.vue'),
    },
  ],
})

export default router
