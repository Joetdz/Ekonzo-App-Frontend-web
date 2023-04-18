import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 320,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const MyChallengeCard = ({
  image,
  progress,
  solde,
  montant_depart,
  target,
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Button>Primary</Button>
        </Box>
      </Modal>
    </>
  )
}

export default MyChallengeCard
