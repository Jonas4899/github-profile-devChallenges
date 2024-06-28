const GITHUB_PROFILE_ENDPOINT = 'https://api.github.com/users/'

export const fetchGithubProfile = async (username) => {
  try {
    const res = await fetch(`${GITHUB_PROFILE_ENDPOINT}${username}`)
    if (!res.ok) throw new Error('Error fetching profile from Github.')
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e)
  }
}
