import axios from "axios"
import { create } from "zustand"
import { AccountService } from "../Services/Account.Service"
import { persist } from "zustand/middleware"

export const useChallengeStore = create(
  persist(
    (set) => ({
      challenges: [],
      isloading: false,
      fetchChallenges: async () => {
        console.log("token", AccountService.getToken())
        set({ isloading: true })

        await axios({
          method: "get",
          url: `${process.env.REACT_APP_BASE_URL}challenge/all`,
          headers: {
            token: ` ${AccountService.getToken()}`,
          },
        })
          .then((data) => {
            set({ challenges: data.data.challenges, isloading: false })
          })
          .catch((err) => {
            console.log(err)
            set({ isloading: false })
          })
      },
      currentBuyChallengeCard: {},

      updateCurrentBuyChallengeCard: (answer) =>
        set({ currentBuyChallengeCard: answer }),
    }),
    {
      name: "challenge-storage", // unique name
      getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
  )
)