// https://github.com/TerryZ/vuepress-login

export function checkAuth () {
  const auth = JSON.parse(localStorage.getItem("auth"))
  if (!auth) return false
  const expired = ((new Date().getTime() - auth.time) / 100 / 60 / 60) > 4
  return auth && Object.keys(auth).length && !expired
}