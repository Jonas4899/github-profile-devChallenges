import PropTypes from 'prop-types'

export function AutocompleteUserBox({
  urlProfileImg = '',
  profileName = '',
  profileDescription = '',
  selectGithubProfile,
  errorProfileInfo
}) {
  return (
    <div
      className={`my-4 p-3 z-10 bg-dark1 w-[400px] flex gap-3 items-center border-none rounded-md ${
        !errorProfileInfo && 'cursor-pointer'
      }`}
      onClick={!errorProfileInfo ? selectGithubProfile : null}
    >
      {errorProfileInfo ? (
        <div className="text-red-500">Profile not found</div>
      ) : (
        <>
          <img
            src={urlProfileImg}
            alt="Profile picture from Github"
            className="w-[60px] border-none rounded-md"
          />
          <div>
            <h2 className="text-lightGray">{profileName}</h2>
            <span className="text-gray3 text-[12px]">{profileDescription}</span>
          </div>
        </>
      )}
    </div>
  )
}

AutocompleteUserBox.propTypes = {
  urlProfileImg: PropTypes.string,
  profileName: PropTypes.string,
  profileDescription: PropTypes.string,
  selectGithubProfile: PropTypes.func,
  errorProfileInfo: PropTypes.bool
}
