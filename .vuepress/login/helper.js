// Do user authorization verify
export function checkAuth () {
  const auth = JSON.parse(localStorage.getItem("auth"))
  return auth && Object.keys(auth).length
}