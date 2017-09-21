// Using commonjs so tests can be run in the command line using node.
const expect = require('expect')
const loading = require('./reducer')

const testToggleLoading = () => {
  const stateBefore = true
  const action = {
    type: 'TOGGLE_LOADING'
  }
  const stateAfter = false

  expect(
    loading(stateBefore, action)
  ).toEqual(stateAfter)
}
testToggleLoading()

console.log('All tests passed.')
