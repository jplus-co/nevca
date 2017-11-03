import fade from './transition.fade'
import overlay from './transition.overlay'

// Generic tweens
import fadeIn from './tween.fade-in'
import slideIn from './tween.slide-in'

// Component tweens
import homeHero from './tween.home-hero'
import button from './tween.button'
import line from './tween.line'

export default {
  // barba transitions
  fade,
  overlay,

  // GSAP tweens
  tween: {
    fadeIn,
    slideIn,
    homeHero,
    button,
    line,
    default: fadeIn
  }
}
