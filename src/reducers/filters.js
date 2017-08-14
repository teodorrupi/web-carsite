import { RECEIVE_RESULTS,
       REQUEST_RESULTS, ADD_FILTER, REMOVE_FILTER}
from '../actions'

const filters = (state = {
    isFetching: false,
    isAdding: false,
    isRemoving: false,
    active: [{ key: 0, label: 'Angular' },
        { key: 1, label: 'JQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'ReactJS' },
        { key: 4, label: 'Vue.js' }]
}, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return Object.assign({}, state, {active: [...state.active, {key: action.id, label: action.filter}]})
        case REMOVE_FILTER:
            return Object.assign({}, state, {active: state.active.filter(active => active.key != action.id)})
        case REQUEST_RESULTS:
            return Object.assign({}, state, {isFetching: true, isAdding: false, isRemoving: false})
        case RECEIVE_RESULTS:
            return Object.assign({}, state, {isFetching: true, isAdding: false, isRemoving: false})
        default:
            return state
    }

}

export default filters
