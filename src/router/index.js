import Home from '../pages/Home/Home'
import Detail from '../pages/Detail'
import Login from '../pages/Login'
import Introduction from '../pages/Introduction'
import Api from '../pages/Api'
import About from '../pages/About'
import Register from '../pages/Register'

const router =[
  {
    component:Home,
    path:'/',
    exact:true
  },
  {
    component:Detail,
    path:'/detail',
  },
  {
    component:Login,
    path:'/login',
  },
  {
    component:Introduction,
    path:'/introduction',
  },
  {
    component:Api,
    path:'/api',
  },
  {
    component:About,
    path:'/about',
  },
  {
    component:Register,
    path:'/register',
  }
]

export default router;
