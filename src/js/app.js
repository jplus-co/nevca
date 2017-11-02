import config from './config'
import debounce from 'lodash.debounce'
import preloader from './core/preloader'
import router from './core/router'
import emitter from './core/emitter'
import transition from './transitions'
import {
  WINDOW_RESIZE,
  APP_READY
} from './constants'

class App {
  constructor () {
    this.el = config.app

    TweenLite.defaultEase = Expo.easeOut

    this.init()
  }

  init () {
    const ready = this.ready.bind(this)

    preloader.init(ready)
  }

  ready = () => {
    router.init()

    this.addEventListeners()
    this.animateIn()
  }

  animateIn () {
    return transition.tween.fadeIn(this.el)
  }

  addEventListeners () {
    window.addEventListener('resize', debounce(this.broadcastResize, 200))
  }

  broadcastResize = () => {
    emitter.emit(WINDOW_RESIZE)

    config.width = window.innerWidth
    config.height = window.innerHeight
  }
}

export default App
