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
          Mes Challenges
        </Link>
      </div>{" "}
      <div className="group-home">
        <Link to="/my-cagnottes">
          <span className="icon">
            <MdOutlinePayments />
          </span>
          Mes Cagnottes
        </Link>
      </div>{" "}
      <div className="group-home">
        <Link to="/about">
          <span className="icon">
            <GrUserSettings />
          </span>
          A propos
        </Link>
      </div>
    </div>
  )
}

export default Footer
