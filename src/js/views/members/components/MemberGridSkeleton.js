import { h } from 'preact'
import MemberCard from './MemberCard'

const MemberGridSkeleton = ({
  members
}) => (
  <ul className="member-grid__skeleton">
    {members.map((member, i) =>
      <MemberCard
        skeleton
        {...member}
        key={i}
      />
    )}
  </ul>
)

export default MemberGridSkeleton
