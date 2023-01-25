import React, { useContext, useState } from "react"

import { Route, Routes } from "react-router-dom"
import Errors from "../../Utils/Errors"
import Home from "./Home"
import Layout from "./Layout"
import Login from "../Login"
import Signup from "../Signup"
import Cards from "./Cards"
import BuyCard from "./BuyCard"

const PublicRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Errors />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/buy-card" element={<BuyCard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default PublicRouter
