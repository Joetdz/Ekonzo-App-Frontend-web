import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import Errors from "../../Utils/Errors"
import Home from "./Home"
import Layout from "./Layout"
import Login from "../Login"
import Signup from "../Signup"
import Cards from "./Cards"
import BuyCard from "./BuyCard"
import publicContext from "../../Services/Context.Service"
import { AccountService } from "../../Services/Account.Service"
const PublicRouter = () => {
  const [user, setUser] = useState()
  const [userisLogged, setUserIslogged] = useState(AccountService.isLogged())
  const getUserconnected = (userId) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}user/${userId}`)
      .then((userconnected) => {
        console.log(userconnected.data[0])
        setUser(userconnected.data[0])
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    getUserconnected(AccountService.getUserIdInLocalStorage())
    console.log(user, "fff")
  }, [userisLogged])
  return (
    <publicContext.Provider
      value={{ user, setUser, userisLogged, setUserIslogged }}
    >
      <Routes>
        <Route index element={<Signup />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Errors />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/buy-card" element={<BuyCard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </publicContext.Provider>
  )
}

export default PublicRouter
