import React from "react"
import { useState } from "react"

const BuyCard = () => {
  const [deviseSelected, setDeviseSelected] = useState([
    "2.500 CDF",
    "5.000 CDF",
    "10.000 CDF",
    "25.000 CDF",
    "50.000 CDF",
    "100.000 CDF",
    "200.000 CDF",
  ])
  const onchange = (e) => {
    const devise = e.target.value
    if (devise === "Dollars Américain") {
      setDeviseSelected([
        "1 USD",
        "2 USD",
        "5 USD",
        "10 USD",
        "25 USD",
        "50 USD",
        "100 USD",
      ])
    } else if (devise === "Francs congolais") {
      setDeviseSelected([
        "2.500 CDF",
        "5.000 CDF",
        "10.000 CDF",
        "25.000 CDF",
        "50.000 CDF",
        "100.000 CDF",
        "200.000 CDF",
      ])
    }
  }
  return (
    <div className="buy-card-page">
      <section className="card-section">
        <span className="card-name">Raka-Raka</span>

        <span className="card-case"></span>
      </section>
      <section className="card-detail-section">
        <form className="form-buy-card">
          <div className="group-input">
            <label htmlFor="sel"> Seletionner la dévise</label>
            <select name="" id="sel" onChange={onchange}>
              <option defaultValue disabled>
                Seletionner...
              </option>
              <option value="Francs congolais">Francs congolais</option>
              <option value="Dollars Américain">Dollars Américain</option>
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="mtn">Montant fixe de versemet </label>
            <select id="mtn">
              <option defaultValue disabled>
                Seletionner...
              </option>
              {deviseSelected.map((montant) => (
                <option value={montant}>{montant}</option>
              ))}
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="sel">Choisisez votre féquence de dépot</label>
            <select name="" id="sel">
              <option value="journalière">Journalière</option>
              <option value="hebomadaire">Hebomadaire</option>
              <option value="Mensuelle">Mensuelle</option>
            </select>
          </div>
          <div className="btn">
            <button>Commencez l'epargne</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default BuyCard
