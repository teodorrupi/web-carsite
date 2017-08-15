/**
 * Created by teodor on 10/08/17.
 */

export const REQUEST_RESULTS = 'REQUEST_RESULTS';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

function receiveResults(response) {
    return {
        type: RECEIVE_RESULTS,
        items: response
    }
}

function requestResults() {
    return {
        type: REQUEST_RESULTS
    }
}

export function getResults() {
    return (dispatch, getState) => {
        const results = getState().filters
        dispatch(requestResults())
        // jQuery.ajax({
        //     async: false,
        //     type: "GET",
        //     url: AJS.contextPath() + GET_EXECUTION_API_URL,
        //     data: data,
        //     success: function (response) {
        //         return dispatch(receiveExecutableRows(response))
        //     },
        //     error: function (xhr, ajaxOptions, thrownError) {
        //         console.log("[Error] " + thrownError);
        //     }
        // });
        // return dispatch(receiveResults(response))
    }
}

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export function addFilter(filter, type) {
    const addFilter = (value, type) => {
        return {
            type: ADD_FILTER,
            filter: value,
            filterType: type
        }
    };
    return (dispatch, getState) => {
        dispatch(
            addFilter(filter, type)
        );
    }
}

export function removeFilter(filter){
    const removeFilter = value => {
        return {
            type: REMOVE_FILTER,
            filter: value
        }
    };
    return (dispatch, getState) => {
        dispatch(
            removeFilter(filter)
        );
    }
}

export const FILTER_RESULTS = 'FILTER_RESULTS';

export function filterResults(){
    const filterResults = (filters) => {
        return {
            type: FILTER_RESULTS,
            filters: filters
        }
    };
    return (dispatch, getState) => {
        const filters = getState().filters
        filterResults(filters);
    }
}