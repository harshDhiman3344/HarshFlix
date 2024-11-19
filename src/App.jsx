import React from 'react'
import Header from './COMPONENTS/HEADER/header'
import Home from './COMPONENTS/HOME/Home'
import Footer from './COMPONENTS/FOOTER/Footer'
import About from './COMPONENTS/ABOUT/About'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App