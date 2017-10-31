import { SECTORS_LOAD } from '@constants'

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

export default sectors
