//! function to take userName and capitalize the first letter and send the rest of the username to lower case
export const capitalize = (user) => {
  return user[0].toUpperCase() + user.slice(1).toLowerCase()
}

//! function to filter array of user's videos based on category (project or personal)
export const categoryFilter = (arr, bool) => {
  if (!arr) return 0
  return arr.filter(vid => vid.project === bool)
}

