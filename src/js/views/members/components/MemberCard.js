import { h, Component } from 'preact'
import classnames from 'classnames'

import Mouse from './Mouse'

const MemberCard = ({
  member,
  skeleton,
  sectors
}) => (
  <li class={classnames('member-card', {
    'member-card--skeleton': skeleton
  })}>
    <Mouse
      component={'a'}
      class='member-card__link'
      href={member.acf.website}
      target='_blank'
      tabindex={skeleton ? -1 : 0}
    >
      {mouse => {
        return (
          <figure class='member-card__figure'>
            <div class={classnames('member-card__inner', {
              'px-6': isNearlySquare(member.acf.image)
            })}>
              {member.acf.image && (
                <img
                  class='member-card__logo'
                  src={member.acf.image.url}
                  alt={member.title.rendered}
                />
              )}
              <span class='member-card__hover'>
                <span>Visit website</span>
              </span>
            </div>
            <figcaption
              class='member-card__text'
              dangerouslySetInnerHTML={{__html: member.title.rendered}}></figcaption>

            {!skeleton && (
              <ul class={classnames('member-card__sector-list-hover', {
                'member-card__sector-list-hover--active': mouse.hover
              })}
                style={{
                  transform: `translate3d(${15 + mouse.easeX}px, ${15 + mouse.easeY}px, 0)`,
                  opacity: mouse.hover ? 1 : 0
                }}>
                {member.sectors
                  .map(id => sectors.find(sector => id === sector.id))
                  .map(sector => (
                    <li class="member-card__sector-list-item"
                    dangerouslySetInnerHTML={{__html: sector.name}}></li>
                  ))
                }
              </ul>
            )}
          </figure>
        )
      }}
    </Mouse>
  </li>
)

export default MemberCard


const isNearlySquare = image => (image.width / image.height) < 2
