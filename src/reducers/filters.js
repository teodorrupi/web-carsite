import { RECEIVE_RESULTS,
       REQUEST_RESULTS, ADD_FILTER, REMOVE_FILTER}
from '../actions'
import {opts} from '../constants'

const startFilters = [
    { key: 0, label: '-', type:"brand", value:"none" },
    { key: 1, label: '-', type:"yearFrom", value:"none"},
    { key: 2, label: '-', type:"yearTo", value:"none"}
]

const allFilters = [].concat.apply([], [opts.brands, opts.yearTo, opts.yearFrom])

const filters = (state = {
    isFetching: false,
    isAdding: false,
    isRemoving: false,
    active: startFilters
}, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return Object.assign({}, state, {active: [...state.active.filter(ft=>ft.type != action.filterType), allFilters.filter(ft=>ft.key == action.filter.id)[0]]})
        case REMOVE_FILTER:
            return Object.assign({}, state, {active: [...state.active.filter(active => active.key != action.filter.key), startFilters.filter(ft=>ft.type == action.filter.type)[0]]})
        case REQUEST_RESULTS:
            return Object.assign({}, state, {isFetching: true, isAdding: false, isRemoving: false})
        case RECEIVE_RESULTS:
            return Object.assign({}, state, {isFetching: true, isAdding: false, isRemoving: false})
        default:
            return state
    }

}

export default filters
