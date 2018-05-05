import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import message from '../pages/message'
import more from '../pages/more'
import my from '../pages/my'
import login from '../pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: 'message',
      name: 'message',
      component: message
    },
    {
      path: 'more',
      name: 'more',
      component: more
    },
    {
      path: 'my',
      name: 'my',
      component: my
    },
    {
      path: 'login',
      name: 'login',
      component: login
    }
  ]
})
