import React from 'react'
import Header from '../header/Header'
import Searchbar from '../searchbar/Searchbar'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

const Main = () => {
  return (
   <>
        <Header/>
        <Navbar/>
        <Searchbar/>
            <Outlet/>
        <Footer/>
   </>
  )
}

export default Main