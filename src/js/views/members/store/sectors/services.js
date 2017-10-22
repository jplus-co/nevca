import util from '@util'
import { SECTORS_URL } from '@constants'

export const getSectors = () => (
  // Fetch sector data from WordPress API
  util.fetch(SECTORS_URL)
    // nest arrays of child sectors inside the children key of their parent
    .then(data => data.json)
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
