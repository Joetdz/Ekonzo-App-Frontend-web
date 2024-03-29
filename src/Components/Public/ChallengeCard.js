import React from "react"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { useChallengeStore } from "../../stores/challenge.store"
import { useNavigate } from "react-router-dom"

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

const ChallengeCard = ({ image, prix, detail, nom, target }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const navigate = useNavigate()
  const currentBuyChallengeCard = useChallengeStore(
    (state) => state.currentBuyChallengeCard
  )
  const setcurrentBuyChallengeCard = useChallengeStore(
    (state) => state.updateCurrentBuyChallengeCard
  )
  const currentCard = { image, nom, prix, target }
  const add = () => {
    setcurrentBuyChallengeCard(currentCard)

    if (currentBuyChallengeCard) {
      navigate("/buy-card")
    }
  }

  return (
    <>
      <div className="challenge-card">
        <img src={image} alt="" onClick={handleOpen} />
        <div className="detail-group">
          <div className="detail" onClick={handleOpen}>
            {prix && "Commencez le challenge "}
          </div>
          <div className="prix">{prix} $</div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {nom}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {detail}
          </Typography>
          <button className="btn" onClick={add}>
            Achetez la carte
          </button>
        </Box>
      </Modal>
    </>
  )
}

export default ChallengeCard
