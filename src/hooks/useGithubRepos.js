import { useState } from 'react'

export function useGithubRepos() {
  const [reposList, setReposList] = useState()
  const [errorRepos, setErrorRepos] = useState(null)
  const [loadingRepos, setLoadingRepos] = useState(false)

  const getReposFromUser = async (username) => {
    setLoadingRepos(true)
    setErrorRepos(null)
    try {
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await res.json()
      setReposList(data)
    } catch (err) {
      setErrorRepos(err.message)
      console.error(err.message)
    } finally {
      setLoadingRepos(false)
    }
  }

  return { reposList, getReposFromUser, errorRepos, loadingRepos }
}
