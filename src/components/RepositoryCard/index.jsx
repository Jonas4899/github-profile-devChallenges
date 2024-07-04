import PropTypes from 'prop-types'
import { ChieldIcon } from './../../resources/icons/ChieldIcon'
import { ForkIcon } from './../../resources/icons/ForkIcon'
import { StarIcon } from './../../resources/icons/StarIcon'

export function RepositoryCard({
  repoName,
  description = 'No description provided',
  license = null,
  forks = 0,
  stargazersCount = 0,
  repoUrl,
  lastUpdateDate = 'recently'
}) {
  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 rounded-2xl flex flex-col gap-3 bg-gradient-to-r from-dark1 to-dark2 hover:from-dark2 hover:to-dark1 transition-colors duration-300 cursor-pointer"
    >
      <h2 className="text-lg text-lightGray hover:underline">{repoName}</h2>
      <p className="text-sm text-gray3">{description}</p>
      <div className="flex gap-4 flex-wrap">
        {license && (
          <div className="flex items-center gap-1">
            <ChieldIcon colorStroke="#97A4B6" />
            <span className="text-gray3">{license}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <ForkIcon colorStroke="#97A4B6" />
          <span className="text-gray3">{forks}</span>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon colorStroke="#97A4B6" />
          <span className="text-gray3">{stargazersCount}</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray3 text-[12px]">
            updated {lastUpdateDate}
          </span>
        </div>
      </div>
    </a>
  )
}

RepositoryCard.propTypes = {
  repoName: PropTypes.string.isRequired,
  description: PropTypes.string,
  license: PropTypes.string,
  forks: PropTypes.number,
  stargazersCount: PropTypes.number,
  repoUrl: PropTypes.string.isRequired,
  lastUpdateDate: PropTypes.string
}
