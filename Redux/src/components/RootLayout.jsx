import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoard from './DashBoard'
import NavBarPanel from './NavBarPanel'


const RootLayout = () => {
  return (
    
      <main>
        <NavBarPanel />
      <Outlet />
      </main>
      
    
  )
}

export default RootLayout
