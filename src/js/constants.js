// Custom events
export const WINDOW_RESIZE = 'windowResize'

// Barba events
export const LINK_CLICKED = 'linkClicked'
export const INIT_STATE_CHANGE = 'initStateChange'
export const NEW_PAGE_READY = 'newPageReady'
export const TRANSITION_COMPLETED = 'transitionCompleted'

// Browse Members Preact App constants
export const TECHNOLOGY_ID = 148
export const LIFE_SCIENCE_ID = 149
export const PARENT_SECTORS_ENDPOINT = '/wp-json/wp/v2/sectors/?parent=0'
export const TECHNOLOGY_CHILD_SECTORS_ENDPOINT = `/wp-json/wp/v2/sectors/?parent=${TECHNOLOGY_ID}`
export const LIFE_SCIENCE_CHILD_SECTORS_ENDPOINT = `/wp-json/wp/v2/sectors/?parent=${LIFE_SCIENCE_ID}`
