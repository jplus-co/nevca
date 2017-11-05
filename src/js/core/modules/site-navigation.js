import config from '@config'

class SiteNavigation {
  constructor (opt = {}) {
    this.ui = {
      toggle: opt.toggle,
      header: opt.header,
      menuLinks: opt.menuLinks
    }

    this.state = {
      open: false
    }

    this.props = {
      breakpoint: opt.breakpoint
    }
  }

  init () {
    this.addEvents()
  }

  addEvents () {
    this.ui.toggle.addEventListener('click', this.toggleMenu)
    this.ui.menuLinks.forEach(link =>
      link.addEventListener('click', this.closeMenu))
  }

  toggleMenu = () => {
    this.state.open ? this.closeMenu() : this.openMenu()
  }

  closeMenu = () => {
    if (!this.state.open) return

    this.state.open = false

    config.body.classList.remove('menu--is-open')
  }

  openMenu = () => {
    if (this.state.open) return

    this.state.open = true

    config.body.classList.add('menu--is-open')
  }
}

export default SiteNavigation
