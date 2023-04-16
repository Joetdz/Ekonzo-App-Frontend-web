import axios from "axios"
import { create } from "zustand"
import { AccountService } from "../Services/Account.Service"

export const useChallengeStore = create((set) => ({
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
}))
