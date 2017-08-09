/**
 * Created by teodor on 08/08/17.
 */
import { combineReducers } from 'redux'
import {responsiveStateReducer} from 'redux-responsive';
import {responsiveDrawer} from 'material-ui-responsive-drawer';
// import scenarios from './scenarios'

const rootReducer = combineReducers({
    browser: responsiveStateReducer,
    responsiveDrawer: responsiveDrawer
})

export default rootReducer