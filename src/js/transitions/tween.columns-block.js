export default function (section) {
  const ui = {
    mask: [...section.querySelectorAll('.js-mask')],
    image: [...section.querySelectorAll('.js-image')],
    button: section.querySelector('.js-button')
  }

  new TimelineMax()
    .add(() => ui.button.classList.add('button--enter'))
    .set(ui.mask, { x: '-108%' })
    .set(ui.image, { x: '108%' })
    .set(ui.button, { transformOrigin: 'left', scaleX: 0 })

  return function () {
    const tl = new TimelineMax({ paused: true })

    tl.to(ui.mask, 1, { x: '0%', ease: Quint.easeInOut }, 'in')
    tl.to(ui.image, 1, { x: '0%', ease: Quint.easeInOut }, 'in')
    tl.to(ui.button, 1, { scaleX: 1, ease: Quint.easeInOut }, 'in')
    tl.add(() => ui.button.classList.remove('button--enter'))

    tl.restart()
  }
}
