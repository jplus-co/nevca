export default function ({
  heading
}) {
  const tl = new TimelineMax({ paused: true })

  const split = heading.innerHTML.split('<br>')
    .map(lineContent => `
      <div class="line">
        <div class="line-inner">${lineContent}</div>
      </div>
    `).join('')

  heading.innerHTML = split

  tl.set('.line-inner', { y: '75%', autoAlpha: 0 })

  return function () {
    tl.staggerTo('.line-inner', 1.2, { y: '0%', autoAlpha: 1, ease: Expo.easeOut }, 0.075, 1)
    tl.restart()
  }
}
