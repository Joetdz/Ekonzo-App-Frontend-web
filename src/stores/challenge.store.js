import axios from "axios"
import { create } from "zustand"
import { AccountService } from "../Services/Account.Service"

export const useChallengeStore = create((set) => ({
  challenges: [],
  fetchChallenges: async () => {
    console.log("token", AccountService.getToken())

    await axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}challenge/all`,
      headers: {
        token: ` ${AccountService.getToken()}`,
      },
    })
      .then((data) => {
        set({ challenges: data })
      })
      .catch((err) => {
        console.log(err)
      })
  },
}))
