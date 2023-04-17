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

  const [fields, errors, form] = useFormInputValidation(
    {
      nom: "",
      image: "",
      devise: "",
      prix: "",
      numero: "",
      operateur: "",
      target: "",
      montant_depart: "",
    },
    {
      nom: "required",
      image: "required",
      devise: "required",
      prix: "required",
      numero: "required|numeric|digits_between:10,12",
      operateur: "required",
      target: "required",
      montant_depart: "required",
    }
  )
  const onSubmit = async (event) => {
    event.preventDefault()

    const isValid = await form.validate(event)
    if (isValid) {
      console.log(fields)

      console.log("ok", fields, "erro", errors)
    } else {
      console.log(errors)
      notify("Vueillez renseigner correctement tous les champs", errors)
    }
  }

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
    if (devise === "USD") {
      setDeviseSelected([
        "1 USD",
        "2 USD",
        "5 USD",
        "10 USD",
        "25 USD",
        "50 USD",
        "100 USD",
      ])
    } else if (devise === "CDF") {
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
      <div className="card">
        <img src={challengeCard.image} alt="" />
      </div>
      <section className="card-detail-section">
        <form
          className="form-buy-card"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit}
          lang="fr"
        >
          <div className="group-input">
            <label htmlFor="sel"> Dévise</label>
            <select
              name="devise"
              id="sel"
              onChange={onchange}
              onBlur={form.handleBlurEvent}
            >
              <option defaultValue disabled>
                Seletionner...
              </option>
              <option value="CDF">Francs congolais</option>
              <option value="USD">Dollars Américain</option>
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="mtn">Montant de Départ</label>
            <select
              id="mtn"
              name="montant_depart"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
            >
              <option defaultValue disabled>
                Seletionner...
              </option>
              {deviseSelected.map((montant) => (
                <option
                  value={montant}
                  name="montant_depart"
                  onBlur={form.handleBlurEvent}
                  onChange={form.handleChangeEvent}
                >
                  {montant}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="target"
              value={challengeCard.target}
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
            />

            <input
              type="hidden"
              name="nom"
              value={challengeCard.nom}
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
            />

            <input
              type="hidden"
              name="nom"
              value={challengeCard.image}
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
            />
          </div>

          <div className="group-input">
            <label htmlFor="sel">Méthode de paiement</label>
            <select
              name="operateur"
              id="sel"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
            >
              <option value="journalière">Mpesa</option>
              <option value="hebomadaire">Orange money</option>
              <option value="Mensuelle">Airtel money</option>
              <option value="Mensuelle">Afrimoney</option>
            </select>
          </div>
          <div className="group-input">
            <label htmlFor="sel">Méthode de paiement</label>
            +243 <input type="tel" name="numero" />
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
