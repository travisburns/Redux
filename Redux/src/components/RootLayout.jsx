import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoard from './DashBoard'
import NavBarPanel from './NavBarPanel'
import {Provider} from 'react-redux';
import store from '../store/store';

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <NavBarPanel />
      <main>
        
      <Outlet />
      </main>
    </Provider>
   
    </>
    
      
    
  )
}

export default RootLayout
