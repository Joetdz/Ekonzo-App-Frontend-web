import MycardList from "../../Components/MycardList"
import NoCardPage from "../../Components/Public/NoCardPage"
import { useChallengeStore } from "../../stores/challenge.store"
import { useEffect } from "react"

const Cards = () => {
  const userChallengeCardsList = useChallengeStore(
    (state) => state.userChallengeCards
  )
  console.log("hddh", userChallengeCardsList)
  const getUserChallengeCards = useChallengeStore(
    (state) => state.fetchUserChallengeCards
  )

  useEffect(() => {
    getUserChallengeCards()
  }, [])

  return (
    <div className="cards-page">
      {userChallengeCardsList.length !== 0 ? (
        <MycardList mychallengeList={userChallengeCardsList} />
      ) : (
        <NoCardPage />
      )}
    </div>
  )
}

export default Cards
