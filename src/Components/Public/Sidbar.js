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
import { RiUserSettingsLine } from "react-icons/ri"

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
            Mes challenges
          </Link>
        </div>{" "}
        <div className="group-home">
          <Link to="/my-cagnottes">
            <span className="icon">
              <MdOutlinePayments />
            </span>
            Mes cagnottes
          </Link>
        </div>{" "}
        <div className="group-home">
          <Link to="/about">
            <span className="icon">
              <RiUserSettingsLine />
            </span>
            A propos
          </Link>
        </div>{" "}
        <div className="group-home"></div>
      </div>
      <div className="notif">
        <CgLogOut onClick={logout} />
      </div>
    </div>
  )
}

export default Sidbar
