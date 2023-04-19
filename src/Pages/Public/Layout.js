import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../../Components/Public/Footer"
import Header from "../../Components/Public/Header"
import Sidbar from "../../Components/Public/Sidbar"

const Layout = () => {
  return (
    <div className="layout">
      <Sidbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
