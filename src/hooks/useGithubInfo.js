import { useState } from 'react'
import { fetchGithubProfile } from '../services/githubProfile'

export function useGithubInfo() {
  const [usernameInfo, setUsernameInfo] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getGithubInfoFromUser = async (username) => {
    setLoading(true)
    setError(null)
    try {
      const profileInfo = await fetchGithubProfile(username)
      setUsernameInfo(profileInfo)
    } catch (err) {
      setError(err.message)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return { usernameInfo, getGithubInfoFromUser, error, loading }
}
