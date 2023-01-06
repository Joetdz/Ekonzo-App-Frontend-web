import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { accountService } from "../../Services/Account.Service"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    accountService.isLogged() ? "" : navigate("/home")
  }, [])
  return (
    <div>
      {accountService.isLogged() ? (
        <Link onClick={accountService.logout()}>Se deconnecter</Link>
      ) : (
        <Link to="/login">Se connecter</Link>
      )}
    </div>
  )
}

export default Home
