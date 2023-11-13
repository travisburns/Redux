import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoard from './DashBoard'


const RootLayout = () => {
  return (
    
      <main>
        <DashBoard />
      <Outlet />
      </main>
      
    
  )
}

export default RootLayout
