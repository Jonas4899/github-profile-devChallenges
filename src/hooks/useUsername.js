import { useState, useEffect } from 'react'
import { useGithubInfo } from './useGithubInfo'
import { useGithubRepos } from './useGithubRepos'

export function useUsername() {
  const [username, setUsername] = useState('')
  const { usernameInfo, getGithubInfoFromUser, errorProfileInfo } =
    useGithubInfo()
  const [usernameDisplayInfo, setUsernameDisplayInfo] = useState()
  const { reposList, getReposFromUser } = useGithubRepos()
  const [showAllRepos, setShowAllRepos] = useState(false)
  const [isProfileSelected, setIsProfileSelected] = useState(false)
  const [isAutocompleteBoxShown, setIsAutocompleteBoxShown] = useState(false)

  const toggleShowAllRepos = () => {
    setShowAllRepos(!showAllRepos)
  }

  const changeUsername = (desiredUsername) => {
    setUsername(desiredUsername)
  }

  const selectGithubProfile = () => {
    setIsProfileSelected(true)
    setIsAutocompleteBoxShown(false)
    setUsernameDisplayInfo(usernameInfo)
    getReposFromUser(username)
    setShowAllRepos(false)
  }

  // Debouncing of auto suggesting github profiles
  useEffect(() => {
    const getProfileData = setTimeout(() => {
      if (username.length > 0) {
        getGithubInfoFromUser(username)
        setIsAutocompleteBoxShown(true)
      } else {
        setIsAutocompleteBoxShown(false)
        setIsProfileSelected(false)
      }
    }, 1500)

    return () => clearTimeout(getProfileData)
  }, [username])

  return {
    username,
    usernameInfo,
    usernameDisplayInfo,
    errorProfileInfo,
    reposList,
    showAllRepos,
    toggleShowAllRepos,
    changeUsername,
    isProfileSelected,
    isAutocompleteBoxShown,
    selectGithubProfile
  }
}
