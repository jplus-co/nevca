import { h } from 'preact'
import MemberCard from './MemberCard'

const MemberGridList = ({
  members
}) => (
  <ul className="member-grid__list">
    {members.map(member =>
      <MemberCard
        {...member}
        key={member.id}
      />
    )}
  </ul>
)

export default MemberGridList
