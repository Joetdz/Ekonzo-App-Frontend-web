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
      </section>
      <section className="ekz-classique">
        <h1 className="section-title"></h1>
        <div className="cards-container">
          <div className="card">
            <div className="raka-raka"></div>
            <span className="detail">commencez</span>
          </div>
          <div className="card">
            <div className="piyo"></div>
            <span className="detail">commencez</span>
          </div>
          <div className="card">
            <div className="mopao"></div>
            <span className="detail">commencez</span>
          </div>
        </div>
      </section>
      <section className="mayele-na-ekz">
        <h1 className="section-title"></h1>
        <div className="mayele-container">
          <div className="illutration-mayele"> </div>
          <div className="description">
            <h2>Mayele na Ekonzo</h2>
            <p>
              Fixez-vous des objectifs d'épargne et suivez votre progression
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
      </section>
      <section className="mayele-na-ekz">
        <div className="mayele-container">
          <div className="illutration">
            <img src="amico.png"></img>
          </div>
          <div className="description">
            <h2>Yebela masta</h2>

            <button>En savoir plus</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
