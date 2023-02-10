const defaultState = {
    cash: 5,
    count: 1
}

export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT'

export const cashReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_CASH':
            return {...state, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...state, cash: state.cash - action.payload}
        case INCREMENT:
            return {...state, count: state.count + 1}
        case DECREMENT:
            return {...state, count: state.count - 1}
        default:
            return state
    }
}

export const AsyncIncrementCreator = () => ({type: ASYNC_INCREMENT})
export const incrementCreator = () => ({type: INCREMENT})

export const AsyncDecrementCreator = () => ({type: ASYNC_DECREMENT})
export const decrementCreator = () => ({type: DECREMENT})