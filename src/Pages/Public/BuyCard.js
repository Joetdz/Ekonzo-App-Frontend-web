import React from "react"
import { useState } from "react"
import { useChallengeStore } from "../../stores/challenge.store"
import { useFormInputValidation } from "react-form-input-validation"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AccountService } from "../../Services/Account.Service"
import { useEffect } from "react"
import AuthLoader from "../../Components/AuthLoader"
import Box from "@mui/material/Box"
import { useNavigate } from "react-router-dom"

import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,

  p: 4,
}

const BuyCard = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const notify = (message) => {
    toast(message)
  }
  const challengeCard = useChallengeStore(
    (state) => state.currentBuyChallengeCard
  )
  const cardBuyStatus = useChallengeStore((state) => state.cardbuyed)
  const resetCardBuyStatus = useChallengeStore(
    (state) => state.resetCardBuyStatus
  )

  const postBuyCard = useChallengeStore((state) => state.postBuyCard)
  const isloading = useChallengeStore((state) => state.isloading)

  const userId = AccountService.getUserIdInLocalStorage()

  const [data, setData] = useState({
    id: userId,
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

    const validatePhoneNumber = (phoneNumber) => {
      let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      let flag = regex.test(phoneNumber)
      if (flag) {
        return true
      } else {
        return false
      }
    }
    if (
      data.nom === "" ||
      data.image === "" ||
      data.devise === "" ||
      data.prix === "" ||
      data.numero === "" ||
      data.operateur === "" ||
      data.target === "" ||
      data.montant_depart === ""
    ) {
      notify("Veuillez remplier tous les champs")
    } else if (validatePhoneNumber("+243" + data.numero) === false) {
      notify("Numéro de téléphone invalide")
    } else if (isloading === true) {
      notify("Vueilliez patienter")
    } else {
      postBuyCard(data)
    }
  }
  const onchange = (e) => {
    const devise = e.target.value
    const name = e.target.name
    const value = e.target.value

    setData((prev) => {
      return { ...prev, [name]: value }
    })

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
  const navigate = useNavigate()
  useEffect(() => {
    if (isloading === true) {
      handleOpen()
    }
    if (cardBuyStatus) {
      notify(cardBuyStatus)
      resetCardBuyStatus()

      setTimeout(function () {
        navigate("/cards")
      }, 5000)
    }
  }, [cardBuyStatus])

  return (
    <>
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
                <option value="AIRTEL">Airtel money</option>
                <option value="AFRICEL">Afrimoney</option>
              </select>
            </div>
            <div className="group-input">
              <label htmlFor="sel">Numéro</label>
              <div className="num-input">
                {" "}
                +243 <input type="tel" name="numero" onChange={onchange} />
              </div>
            </div>
            <div className="btn">
              <button className="login-btn-local">
                {isloading ? <AuthLoader /> : "Payer la carte"}
              </button>
            </div>
            <ToastContainer />
          </form>
        </section>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </>
  )
}

export default BuyCard
