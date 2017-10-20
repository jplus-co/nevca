import { h, Component } from 'preact'
import classnames from 'classnames'

const MemberCard = ({
  skeleton,
  title,
  acf,
  link
}) => (
  <li class={classnames('member-card', {
    'member-card--skeleton': skeleton
  })}>
    <a class='member-card__link' href={acf.website} target='_blank' tabindex={skeleton ? -1 : 0}>
      <figure class='member-card__figure'>
        <div class={classnames('member-card__inner', {
          'px-6': isNearlySquare(acf.image)
        })}>
          {acf.image && (
            <img
              class='member-card__logo'
              src={acf.image.url}
              alt={title.rendered}
            />
          )}
          <span class='member-card__hover'>
            <span>Visit website</span>
          </span>
        </div>
        <figcaption
          class='member-card__text'
          dangerouslySetInnerHTML={{__html: title.rendered}}></figcaption>
      </figure>
    </a>
  </li>
)

export default MemberCard


const isNearlySquare = image => (image.width / image.height) < 2
