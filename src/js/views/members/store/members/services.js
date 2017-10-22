import util from '@util'
import { MEMBERS_URL } from '@constants'
import { updateTotalRecords } from './actions'
import { updatePageCount } from '../pagination/actions'

// TODO: cache members for each sector ID to minimize api calls.
// attempted to fix in commented code below, but isn't working correctly
//
// export const getMembers = (
//   filters = []
// ) => (
//   filters.length
//     ? Promise.all(
//         filters.map(id =>
//           util.fetch(`${MEMBERS_URL}&sectors=${id}`)
//         )
//       ).then(result => result.length ? result[0] : [])
//     : util.fetch(MEMBERS_URL)
// )

export const getMembers = (
  dispatch,
  getState
) => {
  const { filters, pagination } = getState()
  return filters.length
    ? util.fetch({
      url: `${MEMBERS_URL}&page=${pagination.current}&sectors=${filters.join(',')}`,
      callback: fetchMembersCallback(dispatch)
    })
    : util.fetch({
      url: `${MEMBERS_URL}&page=${pagination.current}`,
      callback: fetchMembersCallback(dispatch)
    })
}

const fetchMembersCallback = dispatch => ({
  totalRecords,
  pageCount
}) => {
  dispatch(updateTotalRecords(totalRecords))
  dispatch(updatePageCount(pageCount))
}
