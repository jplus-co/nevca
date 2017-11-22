import { SECTORS_LOAD } from '@constants'
import compose from 'lodash.compose'

const sectors = (
  state = [],
  action
) => {
  switch (action.type) {
    case SECTORS_LOAD:
      return action.payload
    default:
      return state
  }
}

export const createSectorTree = state => (
  state
  .filter(sector => sector.parent === 0)
  .map(parent => ({
    ...parent,
    // Get child sectors of parent industry and spread into a new object
    children: state.filter(sector => sector.parent === parent.id)
  }))
)

export const createFlatSectorTree = state => (
  createSectorTree(state)
    .reduce((arr, sector) => [
      ...arr,
      sector,
      ...sector.children
    ], [])
)

// convert a list of sector ids into a list of sector objects
export const sectorObjectsFromIDs = (ids, all) => (
  ids.map(id =>
    all.find(sector => id === sector.id))
)

// takes the 2 args from sectorObjectsFromIDs
// and passes returned state to createFlatSectorTree
export const createFlatSectorTreeFromIDs = compose(
  createFlatSectorTree,
  sectorObjectsFromIDs
)

export const isParent = sector => (parentState, childState) => (
  sector.parent === 0 ? parentState : childState
)

export default sectors
