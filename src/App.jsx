import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { GithubProfileInfo } from './components/GithubProfileInfo'
import { fetchGithubProfile } from './services/githubProfile'
import './App.css'

function App() {
  const [username, setUsername] = useState()
  const [usernameInfo, setUsernameInfo] = useState()

  const changeUsername = (e) => {
    e.preventDefault()
    const inputValue = e.target.usernameInput.value.toLowerCase()
    setUsername(inputValue)
    // Reset username input
    e.target.usernameInput.value = ''
  }

  useEffect(() => {
    console.log(`El usuario que se quiere buscar en github es: ${username}`)
    fetchGithubProfile(username).then((profileInfo) =>
      setUsernameInfo(profileInfo)
    )
  }, [username])

  useEffect(() => {
    console.log(usernameInfo)
  }, [usernameInfo])

  return (
    <div className="h-screen font-be-vietnam-pro">
      <Header changeUsername={changeUsername} />
      {usernameInfo && <GithubProfileInfo />}
    </div>
  )
}

export default App
