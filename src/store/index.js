import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReduser'
import { composeWithDevTools } from '@redux-devtools/extension'

const rootReducer = combineReducers({
        cashReducer,
        customerReducer
    }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))