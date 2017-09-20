// Using commonjs tests can be run in the command line using node.
const deepFreeze = require('deep-freeze')
const expect = require('expect')
const activeFilters = require('./activeFilters')

const testAddFilter = () => {
  const stateBefore = []
  const action = {
    type: 'ADD_FILTER',
    id: 150
  }
  const stateAfter = [150]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    activeFilters(stateBefore, action)
  ).toEqual(stateAfter)
}
testAddFilter()

const testRemoveFilter = () => {
  const stateBefore = [120, 142, 150, 96]
  const action = {
    type: 'REMOVE_FILTER',
    id: 150
  }
  const stateAfter = [120, 142, 96]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    activeFilters(stateBefore, action)
  ).toEqual(stateAfter)
}
testRemoveFilter()

console.log('All tests passed.')
