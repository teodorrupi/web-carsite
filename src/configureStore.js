/**
 * Created by teodor on 08/08/17.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {responsiveStoreEnhancer} from 'redux-responsive';
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// export default function configureStore(preloadedState) {
//   return createStore( rootReducer, preloadedState, (composeEnhancers(applyMiddleware(
//       thunkMiddleware,
//       loggerMiddleware
//       )))
//   )
// }


export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        compose(
            responsiveStoreEnhancer,
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )

    )
}