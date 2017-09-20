import { h } from 'preact'
import MemberCard from './MemberCard'

const VisibleMemberGrid = ({
  members
}) => (
  <ul class='member-grid'>
    {members.map(member => <MemberCard {...member} />)}
  </ul>
)

export default VisibleMemberGrid
