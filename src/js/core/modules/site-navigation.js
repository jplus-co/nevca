import config from '@config'

class SiteNavigation {
  constructor (opt = {}) {
    this.ui = {
      toggle: opt.toggle,
      header: opt.header,
      menuLinks: opt.menuLinks
    }

    this.options = {
      breakpoint: opt.breakpoint
    }
  }

  init () {
    this.addEvents()
  }

  addEvents () {
    this.ui.toggle.addEventListener('click', this.toggleMenu)
    this.ui.menuLinks.forEach(link =>
      link.addEventListener('click', this.toggleMenu))
  }

  toggleMenu (e) {
    config.body.classList.toggle('menu--is-open')
  }
}

export default SiteNavigation
