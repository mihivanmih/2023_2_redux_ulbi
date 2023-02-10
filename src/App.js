import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addCustomerAction, fetchUsers, removeCustomerAction } from './store/customerReduser'
import { fetchCustomers } from './asyncActions/customers'
import { AsyncDecrementCreator, AsyncIncremantCreator, AsyncIncrementCreator } from './store/cashReducer'

function App() {
    
    const dispatch = useDispatch()
    const {cash, count} = useSelector(state => state.cashReducer)
    const customers = useSelector(state => state.customerReducer.customer)
    
    const [cashInput, setCashInput] = useState(0)
    
    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: Number(cashInput)})
    }
    
    const getCash = () => {
        dispatch({type: "GET_CASH", payload: Number(cashInput)})
    }
    
    const addCustomer = () => {
        const params = {
            name: cashInput,
            id: Date.now()
        }
        dispatch(addCustomerAction(params))
    }
    
    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }
    
    return (
        <div className="App">
            <h1>{ cash }</h1>
            <h1>{ count }</h1>
            <button onClick={ addCash }>Пополнить счет</button>
            <button onClick={ getCash }>Снять со счета счет</button>
            <input
                type="text"
                placeholder={ 'введите сумму' }
                onChange={ (e) => setCashInput(e.target.value) }
                value={ cashInput }
            /> <br/>
            <button onClick={ addCustomer }>Добавить пользователя</button>
            <button onClick={ () => dispatch(fetchCustomers()) }>Добавить пользователей из базы</button>
            <button onClick={() => dispatch(AsyncIncrementCreator()) }>Saga +1</button>
            <button onClick={() => dispatch(AsyncDecrementCreator()) }>Saga -1</button>
            <button onClick={() => dispatch(fetchUsers()) }>Saga users</button>
    
            {
                customers.length > 0
                    ?
                    <div>
                        {
                            customers.map(customer => <div
                                key={customer.id}
                                onClick={() => removeCustomer(customer.id)}
                            >{customer.name}</div>)
                        }
                    </div>
                    :
                    <div>
                        Пользователи не найдены
                    </div>
            }
            
        </div>
    )
}

export default App
