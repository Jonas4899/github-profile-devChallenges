import { ChieldIcon } from './../../resources/icons/ChieldIcon'
import { ForkIcon } from './../../resources/icons/ForkIcon'
import { StarIcon } from './../../resources/icons/StarIcon'

export function RepositoryCard() {
  return (
    <div className="p-6 rounded-2xl flex flex-col gap-3 bg-gradient-to-r from-dark1 to-dark2">
      <h2 className="text-lg text-lightGray">.github</h2>
      <p className="text-sm text-gray3">
        Community health files for the @GitHub organization.
      </p>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <ChieldIcon colorStroke="#97A4B6" />
          <span className="text-gray3">MIT</span>
        </div>
        <div className="flex items-center gap-1">
          <ForkIcon colorStroke="#97A4B6" />
          <span className="text-gray3">703</span>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon colorStroke="#97A4B6" />
          <span className="text-gray3">50</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray3 text-[12px]">updated 3 days ago</span>
        </div>
      </div>
    </div>
  )
}
