import { h } from 'preact'
import CloseButton from './CloseButton'
import FilterGroup from './FilterGroup'
import SelectedFilter from './SelectedFilter'
import * as fromSectors from '../store/sectors/reducer'

class FilterPanel {
  collapsePanel = () => {
    document.body.classList.remove('filter-panel--active')
    this.props.fetchMembers()
  }

  render() {
    const { sectors: allSectors, filters, removeFilter, clearFilters } = this.props
    const sectorTree = fromSectors.createSectorTree(allSectors)

    return (
      <div class='filter-panel' onClick={this.collapsePanel}>
        <div class='filter-panel__inner' onClick={evt => evt.stopPropagation()}>
          <div class='filter-panel__transform'>
            <div class='filter-panel__row'>
              <div class='filter-panel__column'>
                <header class='filter-panel__header'>
                  <CloseButton onClick={this.collapsePanel} />
                  <h4 class='filter-panel__title'>Sectors</h4>
                </header>
                <div class='scroll-area'>
                  <ul class={'filter-panel__list'}>
                    {sectorTree.map(parent =>
                      <FilterGroup parent={parent} />
                    )}
                  </ul>
                </div>
              </div>
              <div class='filter-panel__column'>
                <header class='filter-panel__header'>
                  <h4 class='filter-panel__title'>Selected Filters</h4>
                </header>
                <div class='scroll-area px-3'>
                  {filters.length ? (
                    <button
                      class="filter-panel__unselect-all-button"
                      onClick={clearFilters}>
                      Unselect all
                    </button>
                  ) : null}
                  {filters.length ? (
                    <ul class='filter-panel__list'>
                      {fromSectors.sectorObjectsFromIDs(filters, allSectors)
                        .map(sector => (
                          <SelectedFilter
                            key={sector.id}
                            sector={sector}
                            removeFilter={removeFilter}
                          />
                        ))
                      }
                    </ul>
                  ) : (
                    <p class='filter-panel__text'>No filters selected.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterPanel
