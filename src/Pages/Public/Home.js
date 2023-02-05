import React, { useContext } from "react"
import { useState } from "react"
import { BiShowAlt } from "react-icons/bi"
import publicContext from "../../Services/Context.Service"
const Home = () => {
  const [ShowSold, setShowSold] = useState(false)

  const { user } = useContext(publicContext)
  return (
    <div className="home">
      <section className="banner">
        {ShowSold ? (
          <span>
            <BiShowAlt />
          </span>
        ) : (
          <>
            <span> 0.00 CDF</span>
            <span className="separator">|</span>
            <span>0.00 USD </span>{" "}
          </>
        )}
        <h4>Solde Total</h4>
      </section>
      <section className="ekz-classique">
        <h1 className="section-title"> Epargnez des depots predefinit</h1>
        <div className="cards-container">
          <div className="card">
            <div className="raka-raka"></div>
          </div>
          <div className="card">
            <div className="piyo"></div>
          </div>
          <div className="card">
            <div className="mopao"></div>
          </div>
        </div>
      </section>
      <section className="mayele-na-ekz">
        <h1 className="section-title">Epargnez pour un Objectif précis</h1>
        <div className="mayele-container">
          <div className="objectif">
            <span className="icon"></span>
            <span className="name"></span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
