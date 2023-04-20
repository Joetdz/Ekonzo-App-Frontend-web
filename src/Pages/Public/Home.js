import React, { useEffect } from "react"
import Box from "@mui/material/Box"

import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

import { BiShowAlt, BiCustomize } from "react-icons/bi"
import publicContext from "../../Services/Context.Service"
import { FaCar, FaMotorcycle } from "react-icons/fa"
import { GiPiggyBank, GiTeacher, GiClothes } from "react-icons/gi"
import { FcHome, FcPhoneAndroid } from "react-icons/fc"
import ChallengeCard from "../../Components/Public/ChallengeCard"
import { useChallengeStore } from "../../stores/challenge.store"
import CardSkeleton from "../../Components/Public/CardSkeleton"
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
const Home = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const Challengeslist = useChallengeStore((state) => state.challenges)
  const getChallenges = useChallengeStore((state) => state.fetchChallenges)
  console.log("hhh", Challengeslist)
  useEffect(() => {
    getChallenges()
  }, [getChallenges])

  return (
    <>
      <div className="home">
        <section className="ekz-classique">
          <h1 className="section-title"> Relevez un challenge</h1>
          <div className="cards-container">
            {Challengeslist.length !== 0 ? (
              Challengeslist.map((challenge) => (
                <ChallengeCard
                  image={challenge.image}
                  prix={challenge.prix}
                  nom={challenge.nom}
                  key={challenge._id}
                  detail={challenge.description}
                  target={challenge.target}
                />
              ))
            ) : (
              <>
                {" "}
                <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
              </>
            )}

            <div className="card">
              <div className="raka-raka"></div>
            </div>
            <div className="card">
              <div className="piyo"></div>
            </div>
            <div className="card">
              <div className="mopao"></div>
            </div>
          </div>
        </section>
        <section className="mayele-na-ekz">
          <h1 className="section-title">Commencez une cagnotte</h1>
          <div className="mayele-container" onClick={handleOpen}>
            <div className="objectif">
              <span className="icon color-rose">
                <GiPiggyBank />
              </span>
              <span className="name">Fonds pour les urgences </span>
            </div>
            <div className="objectif">
              <span className="icon">
                <FcHome />
              </span>
              <span className="name">Payer le Loyer</span>
            </div>
            <div className="objectif">
              <span className="icon color-sky">
                <GiTeacher />
              </span>
              <span className="name">Payer le Minerval</span>
            </div>

            <div className="objectif">
              <span className="icon color-red">
                <FaMotorcycle />
              </span>
              <span className="name">Achetez une Moto</span>
            </div>
            <div className="objectif">
              <span className="icon color-bleu">
                <FaCar />
              </span>
              <span className="name">Achetez une Voiture </span>
            </div>
            <div className="objectif">
              <span className="icon">
                <FcPhoneAndroid />
              </span>
              <span className="name">Achetez un Téléphone</span>
            </div>
            <div className="objectif">
              <span className="icon color-gris">
                <GiClothes />
              </span>
              <span className="name">Achetez des vêtements</span>
            </div>

            <div className="objectif">
              <span className="icon color-pinky">
                <BiCustomize />
              </span>
              <span className="name">Personalisé</span>
            </div>
          </div>
        </section>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Bientôt disponible !
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Ekonzo Cagnotte est une solution simple et intuitive pour
              économiser de l'argent et atteindre vos objectifs d'épargne.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Ce système de cagnotte personnalisé vous permet de déposer des
              montants réguliers et de gérer leurs dépenses
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Home
