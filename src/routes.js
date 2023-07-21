import NotFoundView from './views/NotFoundView.vue'
import SearchView from './views/SearchView.vue'
import UserView from './views/UserView.vue'

export default [
  {
    path: '/',
    component: SearchView,
  },
  {
    path: '/user',
    component: UserView,
    props: (route) => ({ userId: route.query.id }),
  },
  {
    path: '*',
    component: NotFoundView,
  },
]
