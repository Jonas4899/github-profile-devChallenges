import { Header } from './components/Header'
import { GithubProfileInfo } from './components/GithubProfileInfo'
import { useUsername } from './hooks/useUsername'

function App() {
  const {
    usernameInfo,
    reposList,
    changeUsername,
    showAllRepos,
    toggleShowAllRepos
  } = useUsername()

  return (
    <div className="h-screen font-be-vietnam-pro bg-dark3">
      <Header changeUsername={changeUsername} />
      {usernameInfo && (
        <GithubProfileInfo
          usernameInfo={usernameInfo}
          reposList={reposList}
          showAllRepos={showAllRepos}
          toggleShowAllRepos={toggleShowAllRepos}
        />
      )}
    </div>
  )
}

export default App
