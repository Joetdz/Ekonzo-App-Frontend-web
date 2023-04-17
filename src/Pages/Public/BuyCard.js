import React from "react"
import { useState } from "react"
import { useChallengeStore } from "../../stores/challenge.store"
import { useFormInputValidation } from "react-form-input-validation"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const BuyCard = () => {
  const notify = (message) => {
    toast(message)
  }
  const challengeCard = useChallengeStore(
    (state) => state.currentBuyChallengeCard
  )
  const card = useChallengeStore((state) => state.cardBayed)
  const postBuyCard = useChallengeStore((state) => state.postBuyCard)
  console.log(card, "ggdhdjjdjd cd")

  const [data, setData] = useState({
    nom: challengeCard.nom,
    image: challengeCard.image,
    devise: "",
    prix: challengeCard.prix,
    numero: "",
    operateur: "",
    target: challengeCard.target,
    montant_depart: "",
  })

  const [deviseSelected, setDeviseSelected] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = []
    function validatePhoneNumber(phoneNumber) {
      let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      let flag = regex.test(phoneNumber)
      if (flag) {
        console.log("Numéro de téléphone valide")
      } else {
        notify("Numéro de téléphone invalide")
      }
    }
    validatePhoneNumber("+243" + data.numero)

    postBuyCard(data)
    console.log(data)
  }
  const onchange = (e) => {
    const devise = e.target.value
    const name = e.target.name
    const value = e.target.value

    setData((prev) => {
      return { ...prev, [name]: value }
    })

    console.log(e.target.value)
    if (devise === "USD") {
      setDeviseSelected(["1 ", "2 ", "5 ", "10 ", "25 ", "50 ", "100 "])
    } else if (devise === "CDF") {
      setDeviseSelected([
        "2.500 ",
        "5.000 ",
        "10.000 ",
        "25.000 ",
        "50.000 ",
        "100.000 ",
        "200.000 ",
      ])
    }
  }
  return (
    <div className="buy-card-page">
      <div className="card">
        <img src={challengeCard.image} alt="" />
      </div>
      <section className="card-detail-section">
        <form className="form-buy-card" onSubmit={handleSubmit}>
          <div className="group-input">
            <label htmlFor="sel"> Dévise</label>
            <select name="devise" id="sel" onChange={onchange}>
              <option>Seletionner...</option>

              <option value="USD">Dollars Américain</option>
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="mtn">Montant de Départ</label>
            <select id="mtn" name="montant_depart" onChange={onchange}>
              <option>selectionner...</option>
              {deviseSelected.map((montant) => (
                <option value={montant} name="montant_depart">
                  {montant}
                </option>
              ))}
            </select>
          </div>

          <div className="group-input">
            <label htmlFor="sel">Méthode de paiement</label>
            <select name="operateur" id="sel" onChange={onchange}>
              {" "}
              <option>selectionner...</option>
              <option value="MPESA">Mpesa</option>
              <option value="ORANGE">Orange money</option>
              <option value="AIRETEL">Airtel money</option>
              <option value="AFRICEL">Afrimoney</option>
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="sel">numéro</label>
            <div className="num-input">
              {" "}
              +243 <input type="tel" name="numero" onChange={onchange} />
            </div>
          </div>
          <div className="btn">
            <button>Commencez l'epargne</button>
          </div>
          <ToastContainer />
        </form>
      </section>
    </div>
  )
}

export default BuyCard
