import React, { useEffect } from "react"

import { BiShowAlt, BiCustomize } from "react-icons/bi"
import publicContext from "../../Services/Context.Service"
import { FaCar, FaMotorcycle } from "react-icons/fa"
import { GiPiggyBank, GiTeacher, GiClothes } from "react-icons/gi"
import { FcHome, FcPhoneAndroid } from "react-icons/fc"
import ChallengeCard from "../../Components/Public/ChallengeCard"
import { useChallengeStore } from "../../stores/challenge.store"
const Home = () => {
  const Challengeslist = useChallengeStore((state) => state.challenges)
  const getChallenges = useChallengeStore((state) => state.fetchChallenges)
  console.log(Challengeslist)
  useEffect(() => {
    getChallenges()
  }, [])

  return (
    <div className="home">
      <section className="ekz-classique">
        <h1 className="section-title"> Relevez un challenge</h1>
        <div className="cards-container">
          <ChallengeCard image={"piyo.png"} prix={"2$"} />
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
        <div className="mayele-container">
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
    </div>
  )
}

export default Home
