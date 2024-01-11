import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

//outlet
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout
