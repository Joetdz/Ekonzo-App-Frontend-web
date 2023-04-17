import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { useChallengeStore } from "../../stores/challenge.store"
import { useNavigate } from "react-router-dom"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
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
  console.log("ggg", currentBuyChallengeCard)
  const currentCard = { image, nom, prix, target }
  const add = () => {
    setcurrentBuyChallengeCard(currentCard)
    console.log("ggg", currentBuyChallengeCard)
    if (currentBuyChallengeCard) {
      navigate("/buy-card")
    }
  }
  console.log("ffff", currentCard)
  return (
    <>
      <div className="challenge-card">
        <img src={image} alt="" onClick={handleOpen} />
        <div className="detail-group">
          <div className="detail" onClick={handleOpen}>
            En savoir plus
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {nom}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {detail}
          </Typography>
          <Button onClick={add}>Primary</Button>
        </Box>
      </Modal>
    </>
  )
}

export default ChallengeCard
