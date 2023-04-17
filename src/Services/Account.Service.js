const saveToken = (token) => {
  localStorage.setItem("token", token)
}

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("userID")
}

const isLogged = () => {
  let token = localStorage.getItem("token")
  return !!token
}
const SaveCurrentUserInfo = (user) => {
  localStorage.setItem("userID", user)
}
const getUserIdInLocalStorage = () => {
  let userId = localStorage.getItem("userID")
  return userId
}
const getToken = () => {
  let token = localStorage.getItem("token")
  return token
}

export const AccountService = {
  saveToken,
  getToken,
  logout,
  isLogged,
  SaveCurrentUserInfo,
  getUserIdInLocalStorage,
}
