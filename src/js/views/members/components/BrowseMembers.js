import { h, Component } from 'preact'
import classnames from 'classnames'

import FilterPanel from './FilterPanel'
import MemberGrid from './MemberGrid'

class BrowseMembers extends Component {
  componentDidMount () {
    this.props.fetchSectors()
    this.props.fetchMembers()
  }

  render (props, state) {
    const { members, pagination, decrementPage, incrementPage, updatePage } = props
    return (
      <div class={'members__inner'}>
        <FilterPanel {...props} />
        <div>
          <div class='flex align-items-center pb-6'>
            <button class='button button--dropdown' onClick={() => document.body.classList.add('filter-panel--active')}>
              <span class='button__inner'>
                <span class='button__text'>Filter members</span>
                <span class='button__icon'>▾</span>
              </span>
            </button>
            <p class="ml-4">{members.count} results</p>
          </div>
          <MemberGrid {...props} />


          {pagination.count > 1 && (
            <div class='pagination js-pagination'>
              <button onClick={decrementPage}
                class={classnames('pagination__control pagination__control--prev', {
                  'pagination__control--disabled': pagination.current === 1
                })}>
                <span class='sr-text'>Previous page</span>
              </button>
              <ul class='pagination__page-list'>
                {
                  Array(pagination.count).fill().map((item, i) => {
                    const target = i + 1
                    return (
                      <li class='pagination__page-list-item'>
                        <button
                          onClick={() => updatePage(target)}
                          class={classnames('pagination__page-link', {
                            'pagination__page-link--current': pagination.current === target
                          })}>
                          {target}
                        </button>
                      </li>
                    )
                  })
                }
              </ul>
              <button onClick={incrementPage}
                class={classnames('pagination__control pagination__control--next', {
                  'pagination__control--disabled': pagination.current === pagination.count
                })}>
                <span class='sr-text'>Next page</span>
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowseMembers
