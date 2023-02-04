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
export const AccountService = {
  saveToken,
  logout,
  isLogged,
  SaveCurrentUserInfo,
  getUserIdInLocalStorage,
}
