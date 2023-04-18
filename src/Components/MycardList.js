import React from "react"
import MyChallengeCard from "./MyChallengeCard"

const MycardList = ({ mychallengeList }) => {
  return (
    <div className="card-page">
      <h5></h5>
      {mychallengeList &&
        mychallengeList.map((mychallenge) => (
          <MyChallengeCard
            image={mychallenge.image}
            progress={mychallenge.progression}
            solde={mychallenge.solde}
            montant_depart={mychallenge.montant_depart}
            target={mychallenge.target}
            key={mychallenge.imag}
          />
        ))}
    </div>
  )
}

export default MycardList
