import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "../components/Navbar"
import { ToastContainer } from 'react-toastify'
const MainLayouts = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    </>
  )
}

export default MainLayouts