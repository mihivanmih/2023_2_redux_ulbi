import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addCustomerAction, removeCustomerAction } from './store/customerReduser'

function App() {
    
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
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
            <button onClick={ addCash }>Пополнить счет</button>
            <button onClick={ getCash }>Снять со счета счет</button>
            <input
                type="text"
                placeholder={ 'введите сумму' }
                onChange={ (e) => setCashInput(e.target.value) }
                value={ cashInput }
            /> <br/>
            <button onClick={ addCustomer }>Добавить пользователя</button>
    
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
