import React from "react"

const NoCardPage = () => {
  return (
    <div className="no-card-page">
      <section className="no-card-section">
        <div className="illustration">
          <img src="rafiki.png" />
        </div>
        <p>
          Oup's !<br /> Vous n’a pas de cartes d’epargne
        </p>
      </section>
      <section className="buy-cards-section">
        <p className="explication">
          Veuillez Acheter une carte et commencez à epargner intelligemment
          votre argent{" "}
        </p>
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
    </div>
  )
}

export default NoCardPage
