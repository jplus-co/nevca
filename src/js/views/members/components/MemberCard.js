import { h, Component } from 'preact'
import classnames from 'classnames'
import config from '@config'
import util from '@util'
import Mouse from './Mouse'
import { createFlatSectorTreeFromIDs, isParent } from '../store/sectors/reducer'

const MemberCard = ({
  member,
  skeleton,
  sectors: allSectors,
  filters,
  index
}) => {
  const classList = {
    li: classnames('member-card', {
      'member-card--skeleton': skeleton
    }),
    inner: classnames('member-card__inner', {
      'px-6': util.isNearlySquare(member.acf.image)
    }),
    hoverList: (state) => classnames('member-card__sector-list-hover', {
      'member-card__sector-list-hover--active': state,
      'flex flex-wrap': member.sectors.length > 15
    }),
    sector: sector => classnames('member-card__sector-list-item', {
      'flex-basis-50': member.sectors.length > 10,
      'member-card__sector-list-item--active': filters.find(id => id === sector.id)
    })
  }

  return (
    <li class={classList.li}>
      <Mouse
        component={'a'}
        class='member-card__link'
        href={member.acf.website}
        target='_blank'
        tabindex={skeleton ? -1 : 0}
      >
        {mouse => (
          <figure class='member-card__figure'>
            <div class={classList.inner}>
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

            {// TODO: Extract into component
              // --
              // disable on phones
              !skeleton && !config.isDevice && (
                // here is where we inject the mouse position props from the
                // child function of our Mouse component 
                <ul class={classList.hoverList(mouse.hover)}
                  style={{
                    opacity: mouse.hover ? 1 : 0,
                    transform: `translate3d(
                      calc(${index % 4 ? '0%' : '-100%'} +
                      ${mouse.easeX}px),
                      ${25 + mouse.easeY}px, 0)
                    `
                  }}
                >
                  {
                    createFlatSectorTreeFromIDs(
                      member.sectors,
                      allSectors
                    ).map(sector => {
                      return (
                        <li
                          class={classList.sector(sector)}
                          dangerouslySetInnerHTML={{ __html: sector.name }}
                          style={{
                            paddingLeft: isParent(sector)(0, 5),
                            fontWeight: isParent(sector)(700, 400)
                          }}
                        />
                      )
                    })
                  }
                </ul>
              )
            }
          </figure>
        )}
      </Mouse>
    </li>
  )
}

export default MemberCard
