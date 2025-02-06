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
      component: () => import('../components/Contador.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: () => import('../components/lista_de_tareas.vue'),
    },
  ],
})

export default router
