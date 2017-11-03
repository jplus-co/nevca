export default function (mask) {
  const inner = mask.children[0]
  console.log(inner)

  new TimelineMax()
    .set(mask, { x: '-108%' })
    .set(inner, { x: '108%' })

  return function () {
    const tl = new TimelineMax({ paused: true })
    tl.to(mask, 0.8, { x: '0%', ease: Quint.easeInOut }, 'in')
    tl.to(inner, 0.8, { x: '0%', ease: Quint.easeInOut }, 'in')
    tl.restart()
  }
}
