import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./store/asyncActions/customers";
import {asyncDecrementCreator, asyncIncrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

function App() {

    const count = useSelector(state => state.countReducer.count)
    const users = useSelector(state => state.userReducer.users)

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    // console.log(cash)

    const addCash = (cash) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }


  return (
    <div className="App">
      {/*  <div>{cash}</div>*/}
      {/*<div style={{display: 'flex'}}>*/}
      {/*  <button*/}
      {/*  onClick={() => addCash(Number(prompt()))}*/}
      {/*  >Пополнить счет</button>*/}
      {/*    <button*/}
      {/*    onClick={() => getCash(Number(prompt()))}*/}
      {/*    >Снять со счета</button>*/}
      {/*</div>*/}
      {/*  <button*/}
      {/*      onClick={() => addCustomer(prompt())}*/}
      {/*  >Добавить клиента</button>*/}
      {/*  <button*/}
      {/*      onClick={() => addCash(Number(prompt()))}*/}
      {/*  >Удалить клиента</button>*/}

      {/*  <button*/}
      {/*      onClick={() => dispatch(fetchCustomers())}*/}
      {/*  >Получить клиентов из базы</button>*/}

      {/*  { customers.length > 0 ?*/}
      {/*      <div>*/}
      {/*          { customers.map(customer =>*/}
      {/*              <div*/}
      {/*                  key={customer.id}*/}
      {/*                  onClick={() => removeCustomer(customer)}*/}
      {/*              style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: 5}}*/}
      {/*              >{customer.name}</div>*/}
      {/*          )}*/}
      {/*      </div>*/}
      {/*      :*/}
      {/*      <div>*/}
      {/*          Клиенты отсутствуют*/}
      {/*      </div>*/}

      {/*  }*/}

        <div>{count}</div>
        <div className={'btns'}>
            <button className="btn"
            onClick={() => dispatch(asyncIncrementCreator())}
            >ИНКРЕМЕНТ++</button>
            <button className="btn"
                    onClick={() => dispatch(asyncDecrementCreator())}
            >ДЕКРЕМЕНТ--</button>
            <button
                onClick={() => dispatch(fetchUsers())}
                className="btn">ПОЛУЧИТЬ ЮЗЕРОВ--</button>
        </div>
        <div className="users">
            { users.map(user =>
                <div className="user" key={user.id}>
                    {user.name}
                </div>
            )}
        </div>

    </div>
  );
}

export default App;
