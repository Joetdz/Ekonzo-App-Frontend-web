import React, { useContext, useState } from "react"
import { CgLogOut } from "react-icons/cg"
import publicContext from "../../Services/Context.Service"
import { TimeServices } from "../../Services/Time.Service"
import { AccountService } from "../../Services/Account.Service"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { TbHome } from "react-icons/tb"
import { BsCardChecklist } from "react-icons/bs"
import { MdOutlinePayments } from "react-icons/md"
import { GrUserSettings } from "react-icons/gr"

const Sidbar = () => {
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
    <div className="sidbar">
      <div className="logo"></div>
      <div className="navigation">
        <div className="group-home">
          <Link to="/home">
            <span className="icon">
              <TbHome />
            </span>
            Acueil
          </Link>
        </div>
        <div className="group-home">
          <Link to="/cards">
            <span className="icon">
              <BsCardChecklist />
            </span>
            Challenges
          </Link>
        </div>{" "}
        <div className="group-home">
          <Link to="/history">
            <span className="icon">
              <MdOutlinePayments />
            </span>
            Historique
          </Link>
        </div>{" "}
        <div className="group-home">
          <Link to="/setting">
            <span className="icon">
              <GrUserSettings />
            </span>
            options
          </Link>
        </div>
      </div>
      <div className="notif">
        <CgLogOut onClick={logout} />
      </div>
    </div>
  )
}

export default Sidbar
