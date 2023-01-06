import React from "react"
import { Link } from "react-router-dom"
import { TbHome } from "react-icons/tb"
import { BsCardChecklist } from "react-icons/bs"
import { MdOutlinePayments } from "react-icons/md"
import { GrUserSettings } from "react-icons/gr"

const Footer = () => {
  return (
    <div className="footer">
      <div className="group-home">
        <Link>
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
          Mes éparnes
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
  )
}

export default Footer
