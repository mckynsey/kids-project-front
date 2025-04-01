import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/homeview',
      name: 'homeview',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/footer',
      name: 'footer',
      component: ()=> import('../components/Footer.vue')
    }
  ],
})

export default router
