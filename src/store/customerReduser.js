const defaultState = {
    customer: []
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
export const FETCH_USERS = 'FETCH_USERS'

export const customerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_MANY_CUSTOMERS:
            return {...state, customer: [...state.customer, ...action.payload] }
        case ADD_CUSTOMER:
            return {...state, customer: [...state.customer, action.payload] }
        case REMOVE_CUSTOMERS:
            return {...state, customer: state.customer.filter(customer => customer.id !== action.payload) }
        default:
            return state
    }
}

export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})
export const fetchUsers = (payload) => ({type: FETCH_USERS})