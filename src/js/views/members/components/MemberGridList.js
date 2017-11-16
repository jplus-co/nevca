import { h } from 'preact'
import defined from 'defined'
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
          ? <CTACard
              text={defined(window.CTA_CARD_TEXT, 'Your firm could be here. Join the network today.')}
              link={defined(window.CTA_CARD_LINK, `${APP.BASE_URL_RELATIVE}/membership`)}
            />
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
