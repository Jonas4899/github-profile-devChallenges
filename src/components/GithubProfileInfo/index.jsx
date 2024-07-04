import PropTypes from 'prop-types'
import { StatBox } from '../StatBox'
import { RepositoryCard } from '../RepositoryCard'
import { formatDate } from '../../utilities/formatDate'

export function GithubProfileInfo({ usernameInfo, reposList }) {
  return (
    <main className="min-h-[70%] px-[20%] py-3 bg-dark3">
      <section className="flex items-start gap-7 relative">
        <img
          src={usernameInfo.avatar_url}
          alt="Profile image"
          className="w-[120px] -translate-y-[60px] border-dark3 border-8 rounded-xl"
        />
        <StatBox
          statName="Followers"
          statValue={usernameInfo.followers.toString()}
        />
        <StatBox
          statName="Following"
          statValue={usernameInfo.following.toString()}
        />
        <StatBox
          statName="Location"
          statValue={usernameInfo.location ? usernameInfo.location : 'N/A'}
        />
      </section>
      <h1 className="text-3xl text-lightGray">{usernameInfo.login}</h1>
      <p className="my-4 text-base text-gray3">{usernameInfo.bio}</p>
      <section className="grid grid-cols-2 gap-10">
        {reposList && reposList.length > 0 ? (
          reposList.map((repo) => (
            <RepositoryCard
              key={repo.id}
              repoName={repo.name}
              description={repo.description}
              license={repo.license?.name}
              forks={repo.forks}
              stargazersCount={repo.stargazers_count}
              repoUrl={repo.html_url}
              lastUpdateDate={formatDate(repo.updated_at)}
            />
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </section>
    </main>
  )
}

GithubProfileInfo.propTypes = {
  usernameInfo: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    bio: PropTypes.string
  }).isRequired,
  reposList: PropTypes.array
}
