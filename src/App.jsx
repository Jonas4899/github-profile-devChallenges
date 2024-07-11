import { Header } from './components/Header'
import { GithubProfileInfo } from './components/GithubProfileInfo'
import { useUsername } from './hooks/useUsername'

function App() {
  const {
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
  } = useUsername()

  return (
    <div className="h-screen font-be-vietnam-pro bg-dark3">
      <Header
        changeUsername={changeUsername}
        usernameInfo={usernameInfo}
        isAutocompleteBoxShown={isAutocompleteBoxShown}
        selectGithubProfile={selectGithubProfile}
        errorProfileInfo={errorProfileInfo}
      />
      {isProfileSelected && usernameDisplayInfo && (
        <GithubProfileInfo
          usernameInfo={usernameDisplayInfo}
          reposList={reposList}
          showAllRepos={showAllRepos}
          toggleShowAllRepos={toggleShowAllRepos}
        />
      )}
    </div>
  )
}

export default App
