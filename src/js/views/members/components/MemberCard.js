import { h, Component } from 'preact'
import classnames from 'classnames'

const MemberCard = ({
  skeleton,
  title
}) => (
  <li class={classnames('member-card', {
    'member-card--skeleton': skeleton
  })}>
    <a class='member-card__link' href='/'>
      <span class='member-card__text'>
        {title.rendered}
      </span>
    </a>
  </li>
)

export default MemberCard
