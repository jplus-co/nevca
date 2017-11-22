import Barba from 'barba.js'
// adds support for react devtool browser extension
// require('preact/debug')
import { h, render } from 'preact'
import { Provider } from 'preact-redux'
import BrowseMembers from './containers/BrowseMembersContainer'
import store from './store/index'

const members = Barba.BaseView.extend({
  namespace: 'members',

  onEnter () {
    this.render()
  },

  render () {
    const rootEl = document.querySelector('.members')

    // let preact take over ⚛️
    render((
      <Provider store={store}>
        <BrowseMembers />
      </Provider>
    ), rootEl)
  },

	onEnterCompleted () {},

	onLeave () {},

	onLeaveCompleted () {}
})

export default members
