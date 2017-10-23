import { h } from 'preact'
import classnames from 'classnames'

const Pagination = ({
  pagination,
  updatePage,
  incrementPage,
  decrementPage
}) => (
  pagination.count > 1 && (
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
  )
)
export default Pagination
