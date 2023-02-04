const getSalutationBytime = () => {
  let hour = new Date().getHours()
  if (hour >= 4 && hour <= 11) return "Bonjour"
  if (hour >= 12 && hour <= 16) return "Bon après midi"
  if (hour >= 17 && hour <= 20) return "Bonsoir"
  if (hour >= 22 || hour <= 4) return "Douce nuit"
}

export const TimeServices = {
  getSalutationBytime,
}
