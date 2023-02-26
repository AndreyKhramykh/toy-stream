import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CareerView from '@/views/CareerView.vue'
import NewsView from '@/views/NewsView.vue'
import ContactsView from '@/views/ContactsView.vue'
import GamesView from '@/views/GamesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/games',
    name: 'games',
    component: GamesView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
