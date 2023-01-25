import React from "react"

const BuyCard = () => {
  return (
    <div className="buy-card-page">
      <section className="card-section">
        <div className="card">
          <span class="card-number">001</span>
          <span className="card-case">12</span>
        </div>
      </section>
      <section className="card-detail">
        <form>
          <div className="group-input">
            <label htmlFor="sel"> Seletionner la dévise</label>
            <select name="" id="sel">
              <option value="Francs congolais">Francs congolais</option>
              <option value="Dollars Américain">Dollars Américain</option>
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="mtn">Montant fixe de versemet par case</label>
            <input type="text" id="mtn" placeholder="Min 5000-Max 1M" />
          </div>
          <div className="group-input">
            <label htmlFor="sel">choisisez votre féquence de dépot</label>
            <select name="" id="sel">
              <option value="journalière">Journalière</option>
              <option value="hebomadaire">Hebomadaire</option>
              <option value="Mensuelle">Mensuelle</option>
            </select>
            <button>Commencez l'epargne</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default BuyCard
