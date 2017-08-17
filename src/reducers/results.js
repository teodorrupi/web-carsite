import {
    FILTER_RESULTS,
    UNFILTER_RESULTS,
    REQUEST_RESULTS,
    RECEIVE_RESULTS
}
from '../actions'
import {items} from '../constants'

const startResults = items;

const results = (state = {
    isFetching: false,
    list: [
        {}
    ]
}, action) => {
    switch (action.type) {
        case REQUEST_RESULTS:
            return Object.assign({}, state, {isFetching: true});
        case RECEIVE_RESULTS:
            return Object.assign({}, state, {isFetching: false, list:startResults});
        case FILTER_RESULTS:
            var valid_filters = action.filters.active.filter(ft=>ft.value!='none');
            var result = startResults;
            for(var i=0; i<valid_filters.length; i++){
                var to = /To$/;
                var from = /From$/;
                if(valid_filters[i].type.endsWith('From')){
                    result = result.filter(res=>res[valid_filters[i].type.replace(from, "")] >= valid_filters[i].value)
                } else if (valid_filters[i].type.endsWith('To')){
                    result = result.filter(res=>res[valid_filters[i].type.replace(to, "")] <= valid_filters[i].value)
                } else {
                    result = result.filter(res=>res[valid_filters[i].type] == valid_filters[i].value)
                }
            }
            return Object.assign({}, state, {list: result});
        default:
            return state
    }

}

export default results
