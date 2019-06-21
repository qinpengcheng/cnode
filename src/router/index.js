import Home from '../views/home'
import About from '../views/about'
const router =[
  {
    path:'/',
    component:Home,
    exact:true
  },
  {
    path:'/about',
    component:About,
  }
]

export default router;
