import React from "react"

const ChallengeCard = ({ image, prix, detail }) => {
  return (
    <div className="challenge-card">
      <img src={image} alt="" />
      <div className="detail-group">
        <div className="detail">En savoir plus</div>
        <div className="prix">{prix} $</div>
      </div>
    </div>
  )
}

export default ChallengeCard
