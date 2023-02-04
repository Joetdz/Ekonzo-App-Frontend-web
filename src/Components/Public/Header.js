import React, { useContext } from "react"
import { CgLogOut } from "react-icons/cg"
import publicContext from "../../Services/Context.Service"
import { TimeServices } from "../../Services/Time.Service"
import { AccountService } from "../../Services/Account.Service"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const { user, userisLogged, setUserIslogged } = useContext(publicContext)
  const navigate = useNavigate()
  const logout = () => {
    AccountService.logout()
    setUserIslogged(false)
  }
  useEffect(() => {
    !userisLogged && navigate("/login")
    console.log(userisLogged)
  }, [])
  return (
    <div className="header">
      <div className="logo"></div>
      <span>
        {" "}
        {TimeServices.getSalutationBytime()} {user && user.prenom} !
      </span>
      <div className="notif">
        <CgLogOut onClick={logout} />
      </div>
    </div>
  )
}

export default Header
