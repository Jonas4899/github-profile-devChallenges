import { useState } from 'react'
import { fetchGithubProfile } from '../services/githubProfile'

export function useGithubInfo() {
  const [usernameInfo, setUsernameInfo] = useState(null)
  const [errorProfileInfo, setErrorProfileInfo] = useState(false)
  const [loading, setLoading] = useState(false)

  const getGithubInfoFromUser = async (username) => {
    setLoading(true)
    setErrorProfileInfo(false)
    try {
      const profileInfo = await fetchGithubProfile(username)
      setUsernameInfo(profileInfo)
    } catch (err) {
      setErrorProfileInfo(true)
      setUsernameInfo({})
      console.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { usernameInfo, getGithubInfoFromUser, errorProfileInfo, loading }
}
