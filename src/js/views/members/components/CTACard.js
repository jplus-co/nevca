import { h, Component } from 'preact'
import classnames from 'classnames'

const CTACard = ({
  skeleton
}) => (
  <li class={classnames('member-card member-card--cta', {
    'member-card--skeleton': skeleton
  })}>
    <a class='member-card__link' href={`${APP.BASE_URL_RELATIVE}/membership`}>
      <div class='member-card__inner'>
        {/*TODO: Make this text editable*/}
        <span class='member-card__cta-text'>Your firm could be here. Join the network today.</span>
      </div>
      <span class='member-card__text text-button text-button--underline'>Learn more</span>
    </a>
  </li>
)

export default CTACard
