import { useState } from 'react'
import { useGithubInfo } from './useGithubInfo'
import { useGithubRepos } from './useGithubRepos'

export function useUsername() {
  const [username, setUsername] = useState('')
  const { usernameInfo, getGithubInfoFromUser } = useGithubInfo()
  const { reposList, getReposFromUser } = useGithubRepos()

  const changeUsername = (e) => {
    e.preventDefault()
    const newUsername = e.target.usernameInput.value.toLowerCase()
    setUsername(newUsername)
    getGithubInfoFromUser(newUsername)
    getReposFromUser(newUsername)
    // Reset username input
    e.target.usernameInput.value = ''
  }

  return {
    username,
    usernameInfo,
    reposList,
    changeUsername
  }
}
