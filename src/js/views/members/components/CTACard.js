import { h, Component } from 'preact'
import classnames from 'classnames'

const CTACard = ({
  link,
  text,
  skeleton
}) => (
  <li class={classnames('member-card member-card--cta', {
    'member-card--skeleton': skeleton
  })}>
    <a class='member-card__link' href={link}>
      <div class='member-card__inner'>
        <span class='member-card__cta-text'>
          {text}
        </span>
      </div>
      <span class='member-card__text text-button text-button--underline'>Learn more</span>
    </a>
  </li>
)

export default CTACard
