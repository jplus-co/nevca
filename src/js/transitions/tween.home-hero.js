export default function ({
  heading
}) {
  

  return () => new TimelineLite()
    .staggerTo('.line-inner', 1.2, {
      y: '0%',
      autoAlpha: 1,
      ease: Expo.easeOut
    }, 0.075, 1)
}
