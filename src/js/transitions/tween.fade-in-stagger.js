export default function (section) {
  const ui = {
    stagger: [...section.querySelectorAll('.js-stagger')],
  }

  new TimelineMax()
    .set(ui.stagger, { autoAlpha: 0 })

  return function () {
    const tl = new TimelineMax({ paused: true })

    tl.staggerTo(ui.stagger, 1, { autoAlpha: 1, ease: Cubic.easeOut }, 0.25)

    tl.restart()
  }
}
