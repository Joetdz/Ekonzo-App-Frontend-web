import React, { useEffect } from "react"

import ChallengeCard from "../../Components/Public/ChallengeCard"
import { useChallengeStore } from "../../stores/challenge.store"
import CardSkeleton from "../../Components/Public/CardSkeleton"

const NoCagnotteScreen = () => {
  const Challengeslist = useChallengeStore((state) => state.challenges)
  const getChallenges = useChallengeStore((state) => state.fetchChallenges)
  console.log("hhh", Challengeslist)
  useEffect(() => {
    getChallenges()
  }, [getChallenges])

  const navigate = (to) => {}
  return (
    <div className="no-card-page">
      <section className="no-card-section">
        <div className="illustration">
          <img src="rafiki.png" />
          <p>
            Patience !<br /> <br /> Les cagnottes seront bientôt disponibles!
          </p>
        </div>
      </section>
      <section className="buy-cards-section">
        <p className="explication">
          Pour l'instant , veuillez acheter une carte challenge et commencez à
          epargner intelligemment votre argent{" "}
        </p>
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
        </div>
      </section>
    </div>
  )
}

export default NoCagnotteScreen
