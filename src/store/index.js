import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReduser'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import createSagsMiddleware from 'redux-saga'
import { countWatcher } from '../saga/countSaga'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagsMiddleware()

const rootReducer = combineReducers({
        cashReducer,
        customerReducer
    }
)

//export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)