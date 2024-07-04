import PropTypes from 'prop-types'

export function StatBox({ statName, statValue }) {
  return (
    <div className="flex p-2 bg-dark1 w-fit text-sm font-semibold rounded-xl">
      <span className="text-gray2 border-r-2 border-r-gray2 p-2 px-4 ">
        {statName}
      </span>
      <span className="p-2 px-4 text-lightGray">{statValue}</span>
    </div>
  )
}

StatBox.propTypes = {
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.string.isRequired
}
