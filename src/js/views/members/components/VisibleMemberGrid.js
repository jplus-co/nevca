import { h } from 'preact'

const VisibleMemberGrid = ({
  members
}) => (
  <ul class='member-grid'>
    {members.map(member =>
      <li class='member-card' key={member.id}>
        <a class='member-card__link' href='/'>
          <strong>{member.title.rendered}</strong>
        </a>
      </li>
    )}
  </ul>
)

export default VisibleMemberGrid
