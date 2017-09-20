import compose from 'lodash.compose'
import util from '../../util'
import { SECTORS_URL, MEMBERS_URL } from '../../constants'

// receives state as final argument and returns members object
// for current filters
export const fetchVisibleMembers = compose(
  util.fetch,
  visibleMembersURL
)

export const fetchSectors = () => (
  // Fetch sector data from WordPress API
  util.fetch(SECTORS_URL)
    // nest arrays of child sectors inside the children key of their parent
    .then(nestSectors)
    // add active flags to parents and children
    .then(mapActiveFlags)
)

const visibleMembersURL = ({
  activeFilters
}) => (
  activeFilters.length
    ? `${MEMBERS_URL}&sectors=${activeFilters.join(',')}`
    : MEMBERS_URL
)

const nestSectors = json => (
  json
  .filter(sector => sector.parent === 0)
  .map(parent => ({
    ...parent,
    // Get subsectors of parent sector and assign to new object
    children: json.filter(sector => sector.parent === parent.id)
  }))
)

const mapActiveFlags = sectors => (
  sectors
  .map(parent => ({
    ...parent,
    active: false,
    children: parent.children.map(child => ({
      ...child,
      active: false
    }))
  }))
)
