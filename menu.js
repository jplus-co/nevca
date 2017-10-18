import config from './config'
import query from 'query-dom-components'
import classes from 'dom-classes'
import { on } from 'dom-event'

// Element.closest polyfill (might not be needed)
import 'element-closest'

// Greensock animation platform
import { TimelineMax, Expo } from 'gsap'

TweenLite.defaultEase = Expo.easeOut

class Menu {
  constructor (opt = {}) {
    this.animating = false
    this.radius = null
    this.pos = null

    this.bind()

    this.init()
  }

  bind () {
    ['resize', 'onClick', 'onBurgerClick', 'onAnchorClick']
    .forEach(fn => { this[fn] = this[fn].bind(this) })
  }

  init () {
    // this module `query-dom-components` saves referenes to any elements with
    // `js-` prefixed classes in an object. so in this case you can select els
    // like this.ui.burger or this.ui.ripple, etc. Totally not required!
    this.ui = query({ el: config.body })
    this.links = [...this.ui.menuLinks].map(el => el.querySelector('.link-text'))

    this.addEvents()
    this.resize()
  }

  addEvents () {
    // using `dom-event` package but addEventListener or jquery events
    // would work fine here
    on(window, 'resize', this.resize)
    on(document, 'click', this.onClick)
  }

  onClick (e) {
    // delegation of document click based on target

    const anchor = e.target.closest('.js-anchor, .js-menu-links')
    const burger = e.target.closest('.js-burger')
    const link = e.target.closest('.js-link')

    this.resize()

    if (anchor) {
      e.preventDefault()
      this.onAnchorClick(anchor)
    } else if (burger) {
      this.onBurgerClick()
    } else if (link) {
      config.open && this.closeMenu()
    }
  }

  onAnchorClick (anchor) {
    // close the menu if it's open
    config.open && this.closeMenu()
  }

  onBurgerClick () {
    // don't do anything if the menu is in the middle of animating
    if (this.animating) return

    // figure out what animation to start depending on menu state
    config.open === true ? this.closeMenu() : this.openMenu()
  }

  openMenu () {
    // set flags
    this.animating = true
    config.open = true

    // add open class
    classes.add(config.body, 'menu-is-open')

    // GSAP timeline animation that is pretty specifc to nference
    // would be cool to do this with just toggling a class though!
    const tl = new TimelineMax({ paused: true,
      onComplete: _ => {
        // make sure to toggle animating back to false when the animation is
        // complete. if using CSS transitions or animations, could listen for
        // transitionend or animationend event
        this.animating = false
      }})

    tl.set(this.ui.menu, { autoAlpha: 1 })
    tl.to(this.ui.ripple, 0.7, { scale: 1, ease: Expo.easeInOut })
    tl.add(() => classes.add(this.ui.ripple, 'expanded'))
    tl.set(this.ui.ripple, { clearProps: 'transform' })
    tl.staggerTo(this.links, 0.6, { transform: 'none' }, 0.08, 'in')
    tl.to(this.ui.meta, 0.6, { autoAlpha: 1 }, 'in')
    tl.set(this.ui.menu, { pointerEvents: 'auto' })

    tl.restart()
  }

  closeMenu () {
    // pretty much the opposite of open :)

    this.animating = true
    config.open = false

    classes.remove(config.body, 'menu-is-open')

    const tl = new TimelineMax({ paused: true,
      onComplete: _ => {
        this.animating = false
      }})

    tl.set(this.ui.menu, { pointerEvents: 'none' })
    tl.staggerTo(this.links, 0.6, { y: '-100%', skewY: '-8deg', ease: Expo.easeInOut, clearProps: 'all' }, 0.06, 'out')
    tl.to(this.ui.meta, 0.6, { autoAlpha: 0 }, 'out')
    tl.to(this.ui.ripple, 0.7, { scale: 0, ease: Expo.easeInOut }, '-=0.24')
    tl.add(() => classes.remove(this.ui.ripple, 'expanded'))
    tl.set(this.ui.ripple, { clearProps: 'transform' })
    tl.set(this.ui.menu, { autoAlpha: 0 })
    tl.add(() => this.stripe && classes.remove(this.stripe, 'is-clicked'))

    tl.restart()
  }

  resize () {
    // this is the critical part! we need to dynamically add width and height
    // to the ripple element so it always covers the whole screen when at scale(1)

    config.width = window.innerWidth
    config.height = window.innerHeight

    const { width, height } = config
    const bounds = this.ui.burger.getBoundingClientRect()
    const posX = bounds.left + (bounds.width * 0.85)
    const posY = bounds.top + (bounds.height * 0.55)

    // pythagorean theorem mothafucka!
    // thanks mr. nyugen (my 9th grade geometry teacher)
    const diameter = Math.sqrt(width * width + height * height) * 2

    const s = this.ui.ripple.style

    // set style and position of ripple
    s['width'] = `${diameter}px`
    s['height'] = `${diameter}px`
    s['top'] = `${posY}px`
    s['left'] = `${posX}px`
  }
}

export default Menu
