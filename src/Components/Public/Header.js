import React from "react"
import { MdNotificationsActive } from "react-icons/md"

const Header = () => {
  return (
    <div className="header">
      <div className="logo"></div>
      <span>Accueil</span>
      <div className="notif">
        <MdNotificationsActive />
      </div>
    </div>
  )
}

export default Header
