import React from "react"
import MyChallengeCard from "./MyChallengeCard"
import NoCardPage from "./Public/NoCardPage"

const MycardList = ({ mychallengeList }) => {
  return (
    <div className="card-page">
      <h5></h5>
      {mychallengeList ? (
        mychallengeList.map((mychallenge, index) => (
          <MyChallengeCard
            image={mychallenge.image}
            progress={mychallenge.progression}
            solde={mychallenge.solde}
            montant_depart={mychallenge.montant_depart}
            target={mychallenge.target}
            key={mychallenge.image}
            index={index}
          />
        ))
      ) : (
        <NoCardPage />
      )}
    </div>
  )
}

export default MycardList
