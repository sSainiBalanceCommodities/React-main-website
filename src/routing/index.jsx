import { Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './Layout/Layout'


const MainPage = lazy(()=> import("../pages/MainPage"))
const Dashboard = lazy(()=> import("../pages/Dashboard"))
const Join = lazy(()=> import("../pages/Join"))

const allRoutes = [
  {
    id : Math.random(),
    path : '/',
    component : <Layout><Suspense fallback={<div>Loading</div>} ><MainPage /></Suspense></Layout>,
  },
  {
    id : Math.random(),
    path : '/dashboard',
    component : <Layout><Suspense fallback={<div>Loading</div>} ><Dashboard /></Suspense></Layout>,
  },
  {
    id : Math.random(),
    path : '/join-us',
    component : <Layout><Suspense fallback={<div>Loading</div>} ><Join /></Suspense></Layout>,
  }
]

const Routing = () => {
  return (
    <Routes>
      {
        allRoutes.map(route => (<Route key={route.id}  path={route.path} element={route.component} />) )
      }
    
    </Routes>
  )
}

export default Routing
