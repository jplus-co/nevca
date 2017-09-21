import { h, Component } from 'preact'

const MemberCard = ({
  id,
  title
}) => (
  <li class='member-card'>
    <a class='member-card__link' href='/'>
      <strong>{title.rendered}</strong>
    </a>
  </li>
)

export default MemberCard
