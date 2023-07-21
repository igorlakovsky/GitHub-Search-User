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
    props: (route) => ({ userName: route.query.login }),
  },
  {
    path: '*',
    component: NotFoundView,
  },
]
