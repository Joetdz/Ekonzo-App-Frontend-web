import React from "react"

const Home = () => {
  return (
    <div className="home">
      <section className="banner"></section>
      <section className="ekz-classique">
        <h1 className="section-title">Cartes d'epargne</h1>
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
        <h1 className="section-title">Astuces d'épargne</h1>
        <div className="mayele-container">
          <div className="illutration-mayele">
            {" "}
            <img src="Financeapp-pana1.png" />
          </div>
          <div className="description">
            <h2>Mayele na Ekonzo</h2>

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
