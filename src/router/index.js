import { createRouter, createWebHistory } from 'vue-router'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [

    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/connexion',
      name: 'connexion',
      component: () => import('../views/ConnexionView.vue'),
    },

    {
      path: '/inscription',
      name: 'inscription',
      component: () => import('../views/InscriptionView.vue'),
    },

    {
      path: '/pathologie',
      name: 'pathologie',
      component: () => import('../views/PathologieView.vue'),
    },

    {
      path: '/cgu',
      name: 'cgu',
      component: () => import ('../views/ConditionView.vue')
    },

    {
      path: '/rgpd',
      name: 'rgpd',
      component: () => import ('../views/ReglementView.vue')
    },

    {
      path: '/qui',
      name: 'qui',
      component: () => import ('../views/QuisommesView.vue')
    },

    {
      path: '/faq',
      name: 'faq',
      component: () => import ('../views/FoireQuestion.vue')
    },

    {
      path: '/formulaire',
      name: 'formulaire',
      component: () => import ('../views/FormulaireView.vue')
    },

  ],
})

export default router
