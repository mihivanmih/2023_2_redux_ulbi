import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { cashReducer } from './store/cashReducer'

function App() {
    
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cashReducer.cash)
    
    const [cashInput, setCashInput] = useState(0)
    
    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: Number(cashInput)})
    }
    const getCash = () => {
        dispatch({type: "GET_CASH", payload: Number(cashInput)})
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
            />
        </div>
    )
}

export default App
