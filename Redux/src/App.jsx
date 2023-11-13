import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Product from './components/Product'
import DashBoard from './components/DashBoard'
import Cart from './components/Cart'
import RootLayout from './components/RootLayout'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashBoard />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <>
    <div className='App'>
    <RouterProvider router={router} />
    </div>
 
    </>
  )
}

export default App
