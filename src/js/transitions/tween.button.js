export default function (button) {
  new TimelineLite()
    .add(() => button.classList.add('button--enter'))
    .set(button, { transformOrigin: 'left', scaleX: 0 })

  return function () {
    const tl = new TimelineLite({ paused: true })
    tl.to(button, 0.8, { scaleX: 1, ease: Quint.easeInOut }, 'in')
    tl.add(() => button.classList.remove('button--enter'))
    tl.restart()
  }
}
