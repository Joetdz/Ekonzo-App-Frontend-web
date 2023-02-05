import React, { useContext, useState } from "react"
import { CgLogOut } from "react-icons/cg"
import publicContext from "../../Services/Context.Service"
import { TimeServices } from "../../Services/Time.Service"
import { AccountService } from "../../Services/Account.Service"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const { user, userisLogged, setUserIslogged } = useContext(publicContext)
  const [salutation, setSalutation] = useState(
    TimeServices.getSalutationBytime()
  )
  const navigate = useNavigate()
  const logout = () => {
    AccountService.logout()
    setUserIslogged(false)
  }
  useEffect(() => {
    setSalutation(TimeServices.getSalutationBytime())
    !userisLogged && navigate("/login")

    console.log(userisLogged)
  }, [userisLogged, salutation])
  return (
    <div className="header">
      <div className="logo"></div>
      <span className="salutation">
        {" "}
        {salutation} {user && user.prenom} !
      </span>
      <div className="notif">
        <CgLogOut onClick={logout} />
      </div>
    </div>
  )
}

export default Header
