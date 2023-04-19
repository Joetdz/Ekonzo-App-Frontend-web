import React from "react"
import Box from "@mui/material/Box"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { AccountService } from "../Services/Account.Service"
import { useChallengeStore } from "../stores/challenge.store"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
}

const MyChallengeCard = ({
  image,
  progress,
  solde,
  montant_depart,
  target,
  index,
}) => {
  const depositstatus = useChallengeStore((state) => state.depositCardchanlenge)
  const postDeposit = useChallengeStore((state) => state.postDeposit)
  const isloading = useChallengeStore((state) => state.isloading)
  console.log("ldd", depositstatus)
  console.log(isloading)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const notify = (message) => {
    toast(message)
  }
  const userId = AccountService.getUserIdInLocalStorage()
  const [data, setData] = useState({
    index: index,
    id: userId,
    devise: "USD",
    numero: "",
    operateur: "",
  })

  const onchange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const validatePhoneNumber = (phoneNumber) => {
    let regex = /^[+]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\]?[0-9]{4,6}$/im
    let flag = regex.test(phoneNumber)
    if (flag) {
      console.log("Numéro de téléphone valide")
      return true
    } else {
      return false
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      data.index === "" ||
      data.id === "" ||
      data.devise === "" ||
      data.numero === "" ||
      data.operateur === ""
    ) {
      notify("veuilliez remplire tous les champs")
    } else if (validatePhoneNumber("+243" + data.numero) === false) {
      notify("Numéro de téléphone invalide")
    } else {
      postDeposit(data)
      console.log("data", data)
    }
  }

  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={image} alt="" />
        </div>
        <div className="details">
          <h2>Details</h2>
          <span className="progess">
            Progrssion :{progress}/{target}
          </span>
          <span className="solde">Montant de depart: {montant_depart}</span>
          <span className="solde">Sold: {solde}USD</span>
        </div>
        <div className="buttons">
          <div>
            <button className="btn-depot" onClick={handleOpen}>
              Dépot
            </button>
          </div>

          <div>
            <button className="btn-retrait">Retrait</button>
          </div>
        </div>
        <ToastContainer />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Dépôt sur la carte N°8{index}23{index}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {" "}
            Montant:{index} USD
          </Typography>
          <div className="modal-deposit">
            <section className="card-detail-section">
              <form className="form-buy-card" onSubmit={handleSubmit}>
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
                    Commencez le challenge{" "}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default MyChallengeCard
