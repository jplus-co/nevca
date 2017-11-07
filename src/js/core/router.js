import Barba from 'barba.js'
import views from '../views'
import emitter from './emitter'
import utils from '../util'
import config from '../config'
import transitionReducer from '../transitions/reducer'
import {
  INIT_STATE_CHANGE,
  NEW_PAGE_READY,
  TRANSITION_COMPLETED
} from '../constants'

import Parallax from './modules/parallax'
import ScrollFx from './modules/scroll-fx'

class Router {
  constructor () {
    Barba.Pjax.Dom.wrapperId = 'app'
    Barba.Pjax.Dom.containerClass = 'view'

    this.utils = utils.router
  }

  init () {
    this.addEventListeners()

    views.map(view => view.init())
    Barba.Prefetch.init()
    Barba.Pjax.start()

    this.getTransition()
  }

  addEventListeners () {
    emitter.on(INIT_STATE_CHANGE, this.handleStateChange)
    emitter.on(NEW_PAGE_READY, this.handleNewPageReady)
    emitter.on(TRANSITION_COMPLETED, this.handleTransitionCompleted)
  }

  getTransition () {
    Barba.Pjax.getTransition = () => transitionReducer
  }

  handleStateChange = () => {
    this.utils.lock()
  }

  handleNewPageReady = (cur, prev, page, raw) => {
    config.body.classList.add(`is-${Barba.Pjax.History.currentStatus().namespace}`)

    if (Barba.Pjax.History.prevStatus()) {
      config.body.classList.remove(`is-${Barba.Pjax.History.prevStatus().namespace}`)
    }
  }

  handleTransitionCompleted = () => {
    this.utils.unlock()
  }

  // initModules(page) {
  //   this.initParallax(page)
  //   this.initFx(page)
  // }
  //
  // initParallax (page) {
  //   const parallaxItems = page.querySelectorAll('.js-parallax')
  //
  //   this.parallax = new Parallax({ parallaxItems })
  //   this.parallax.init()
  // }
  //
  // initFx (page) {
  //   const fxTriggers = page.querySelectorAll('.js-fx-trigger')
  //
  //   this.fx = new ScrollFx({ fxTriggers })
  //   this.fx.init()
  // }
}

export default new Router()
