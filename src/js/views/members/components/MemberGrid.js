import { h } from 'preact'
import MemberCard from './MemberCard'

const MemberGrid = ({
  members
}) => (
  <ul class='member-grid'>
    {members.map(member =>
      <MemberCard
        {...member}
        key={member.id}
      />
    )}
  </ul>
)

export default MemberGrid
