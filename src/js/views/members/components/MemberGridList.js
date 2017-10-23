import { h } from 'preact'
import MemberCard from './MemberCard'
import CTACard from './CTACard'

const MemberGridList = ({
  members,
  sectors,
  filters
}) => {
  return (
    <ul className="member-grid__list">
      {members.map((member, i) =>
        member === 'cta'
          ? <CTACard />
          : <MemberCard
              filters={filters}
              sectors={sectors}
              member={member}
              key={member.id}
              index={i + 1}
            />
      )}
    </ul>
  )
}

export default MemberGridList
