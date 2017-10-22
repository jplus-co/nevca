import { h } from 'preact'
import MemberCard from './MemberCard'
import CTACard from './CTACard'

const MemberGridList = ({
  members,
  sectors
}) => {
  return (
    <ul className="member-grid__list">
      {members.map((member, i) =>
        member === 'cta'
          ? <CTACard />
          : <MemberCard
              sectors={sectors}
              member={member}
              key={member.id}
            />
      )}
    </ul>
  )
}

export default MemberGridList
