import util from '../../../../util'
import { MEMBERS_URL } from '../../../../constants'

// TODO: cache members for each sector ID to minimize api calls.
// attempted to fix in commented code below, but isn't working correctly
//
// export const getMembers = (
//   activeFilters = []
// ) => (
//   activeFilters.length
//     ? Promise.all(
//         activeFilters.map(id =>
//           util.fetch(`${MEMBERS_URL}&sectors=${id}`)
//         )
//       ).then(result => result.length ? result[0] : [])
//     : util.fetch(MEMBERS_URL)
// )

export const getMembers = (
  activeFilters = []
) => (
  activeFilters.length
    ? util.fetch(`${MEMBERS_URL}&sectors=${activeFilters.join(',')}`)
    : util.fetch(MEMBERS_URL)
)
