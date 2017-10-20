// Custom events
export const WINDOW_RESIZE = 'windowResize'

// Barba events
export const LINK_CLICKED = 'linkClicked'
export const INIT_STATE_CHANGE = 'initStateChange'
export const NEW_PAGE_READY = 'newPageReady'
export const TRANSITION_COMPLETED = 'transitionCompleted'

// WP-API endpoints
export const API_BASE_URL = `${APP.BASE_URL_RELATIVE}/wp-json/wp/v2`
export const SECTORS_URL = `${API_BASE_URL}/sectors/?per_page=99&order=desc`
export const MEMBERS_URL = `${API_BASE_URL}/firms/?per_page=11&orderby=title&order=asc`

// Redux action types
export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const MEMBERS_LOAD = 'MEMBERS_LOAD'
export const SECTORS_LOAD = 'SECTORS_LOAD'
export const ADD_FILTER = 'ADD_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const INCREMENT_PAGE = 'INCREMENT_PAGE'
export const DECREMENT_PAGE = 'DECREMENT_PAGE'
export const UPDATE_TOTAL_RECORDS = 'UPDATE_TOTAL_RECORDS'
export const UPDATE_PAGE_COUNT = 'UPDATE_PAGE_COUNT'
