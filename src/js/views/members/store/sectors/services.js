import util from '@util'
import { SECTORS_URL } from '@constants'

export const getSectors = () => (
  // Fetch sector data from WordPress API
  util.fetch(SECTORS_URL)
    // nest arrays of child sectors inside the children key of their parent
    .then(nestSectors)
)

const nestSectors = json => (
  json
  .filter(sector => sector.parent === 0)
  .map(parent => ({
    ...parent,
    // Get child sectors of parent industry and spread into a new object
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
