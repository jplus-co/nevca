import config from '../config'
import rafScroll from 'raf-scroll'

// wraps singleton of `raf-scroll` package
class Scroll {
  constructor () {
    this.manager = rafScroll
  }

  to (x, y) {
    window.scroll(x, y)
  }

  reset () {
    this.to(0, 0)
  }

  current () {
    if (window.pageYOffset) return window.pageYOffset
    return document.documentElement.clientHeight
      ? document.documentElement.scrollTop
      : document.body.scrollTop
  }
}

export default new Scroll()
