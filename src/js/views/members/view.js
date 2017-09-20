import Barba from 'barba.js'

// adds support for react devtool browser extension
require('preact/debug')

import { h, render } from 'preact'

import { Provider } from 'preact-redux'
import store from './store/index'

import BrowseMembers from './components/BrowseMembers.js'

const members = Barba.BaseView.extend({
  namespace: 'members',

  onEnter () {
    this.render()
  },

  render () {
    const rootEl = document.querySelector('#members-container')

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
