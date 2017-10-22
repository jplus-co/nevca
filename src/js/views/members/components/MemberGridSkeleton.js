import { h } from 'preact'
import MemberCard from './MemberCard'
import CTACard from './CTACard'

const MemberGridSkeleton = ({
  members
}) => (
  <ul className="member-grid__skeleton">
  {members.map((member, i) =>
    member === 'cta'
      ? <CTACard skeleton />
      : <MemberCard skeleton member={member} key={member.id} />
  )}
  </ul>
)

export default MemberGridSkeleton
