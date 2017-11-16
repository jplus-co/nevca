import { h } from 'preact'
import defined from 'defined'
import MemberCard from './MemberCard'
import CTACard from './CTACard'

const MemberGridList = ({
  members,
  sectors,
  filters
}) => {
  const text = window.CTA_CARD_TEXT.length > 0
    ? window.CTA_CARD_TEXT
    : 'Your firm could be here. Join the network today.'

  const link = window.CTA_CARD_LINK.length > 0
    ? window.CTA_CARD_LINK
    : `${APP.BASE_URL_RELATIVE}/membership`

  return (
    <ul className="member-grid__list">
      {members.map((member, i) =>
        member === 'cta'
          ? <CTACard
              text={text}
              link={link}
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
