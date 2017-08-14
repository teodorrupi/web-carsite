/**
 * Created by teodor on 08/08/17.
 */
import { combineReducers } from 'redux'
import {responsiveStateReducer} from 'redux-responsive';
import {responsiveDrawer} from 'material-ui-responsive-drawer';
import filters from './filters'

const rootReducer = combineReducers({
    // browser: responsiveStateReducer,
    // responsiveDrawer: responsiveDrawer,
    filters
})

export default rootReducer