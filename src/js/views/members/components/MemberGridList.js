import { h } from 'preact'
import MemberCard from './MemberCard'
import CTACard from './CTACard'

const MemberGridList = ({
  members
}) => {
  const membersWithCTACard = [
    ...members.slice(0, 5),
    'cta',
    ...members.slice(5)
  ]

  return (
    <ul className="member-grid__list">
      {membersWithCTACard.map((member, i) =>
        member === 'cta'
          ? <CTACard />
          : <MemberCard {...member} key={member.id} />
      )}
    </ul>
  )
}



export default MemberGridList
