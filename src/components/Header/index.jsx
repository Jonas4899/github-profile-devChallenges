import PropTypes from 'prop-types'
import { SearchIcon } from './../../resources/icons/SearchIcon.jsx'
import { AutocompleteUserBox } from '../AutocompleteUserBox/index.jsx'
import heroImage from './../../resources/images/hero-image-github-profile.png'

export function Header({
  changeUsername,
  usernameInfo,
  isAutocompleteBoxShown,
  selectGithubProfile,
  errorProfileInfo
}) {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <header className="relative flex flex-col items-center h-[30%] p-8">
      <img
        src={heroImage}
        alt="Hero image of space"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <form className="relative" onSubmit={handleSubmit}>
        <SearchIcon
          color="#6B727D"
          className="absolute inset-3 pointer-events-none"
        />
        <input
          type="text"
          name="usernameInput"
          id="usernameInput"
          className=" w-[400px] pl-11 pr-3 py-3 bg-gray1 text-lightGray placeholder-gray-500 border-none rounded-md border-2 font-be-vietnam-pro"
          placeholder="username"
          onChange={(event) => changeUsername(event.target.value)}
        />
      </form>
      {isAutocompleteBoxShown && usernameInfo && (
        <AutocompleteUserBox
          urlProfileImg={usernameInfo.avatar_url}
          profileName={usernameInfo.login}
          profileDescription={usernameInfo.bio}
          selectGithubProfile={selectGithubProfile}
          errorProfileInfo={errorProfileInfo}
        />
      )}
    </header>
  )
}

Header.propTypes = {
  changeUsername: PropTypes.func.isRequired,
  usernameInfo: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string
  }),
  isAutocompleteBoxShown: PropTypes.bool,
  selectGithubProfile: PropTypes.func,
  errorProfileInfo: PropTypes.bool
}
