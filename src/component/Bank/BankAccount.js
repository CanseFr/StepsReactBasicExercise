import ButtonClassic from "../Material/ButtonClassic";
import {useReducer} from "react";

const initialState = {
    statusAccount: false,
    balance:0,
    loan: 0,
}

const INITIAL_DEPOSIT = 150
const INITIAL_WITHDRAW = 50

function reducer(state, action){
    switch (action.type){
        case 'activateAccount':
            return {...state, statusAccount: true }
        case 'deactivateAccount':
            return {...state, statusAccount: false }
        case 'deposit':
            return {...state, balance: state.balance + INITIAL_DEPOSIT }
        case 'withdraw':
            return {...state, balance: state.balance - INITIAL_WITHDRAW }
        case 'requestLoan':
            return {...state, loan: 5000}
        case 'initLoan':
            return {...state, loan: 0}
        default:
            throw new Error("Unknown action")
    }
}

export default function BankAccount(){

    const [state, dispatch] = useReducer(reducer,initialState )
    const {statusAccount, balance,loan} = state

    return(
        <div className="containerCounter" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <h1>UseReducer Bank Account</h1>

            {statusAccount && <h3>Balance : <span>{balance} $</span></h3>}
            {loan === 0 ? null : <h2>Loan : <span>{loan} $</span></h2>}

            <button
                style= {{width: '30%', marginTop: '5px',backgroundColor: `${statusAccount ? 'grey':""}`}}
                className="button-main"
                disabled={statusAccount}
                onClick={()=>dispatch({type: 'activateAccount'})}
            >Open Account
            </button>

            <button
                style= {{width: '30%', marginTop: '5px',backgroundColor: `${!statusAccount ? 'grey':""}`}}
                className="button-main"
                onClick={()=>dispatch({type: 'deposit'})}
                disabled={!statusAccount}
            >
                Deposit 150
            </button>

            <button
                style= {{width: '30%', marginTop: '5px',backgroundColor: `${!statusAccount ? 'grey':""}`}}
                className="button-main"
                onClick={()=>dispatch({type: 'withdraw'})}
                disabled={!statusAccount}
            >
                Withdraw 50
            </button>

            <button
                style= {{width: '30%', marginTop: '5px',backgroundColor: `${loan !== 0 || !statusAccount ? 'grey':""}`}}
                className="button-main"
                onClick={()=> dispatch({type: 'requestLoan'})}
                disabled={loan !== 0 || !statusAccount}
            >
                Request a loan of 5000
            </button>

            <button
                style= {{width: '30%', marginTop: '5px',backgroundColor: `${loan === 0 ? 'grey':""}`}}
                className="button-main"
                onClick={()=> dispatch({type: 'initLoan'})}
                disabled={!loan === 0}
            >
                Pay loan
            </button>

            <button
                style= {{width: '30%', marginTop: '5px', backgroundColor: `${!statusAccount ? 'grey':""}`}}
                className="button-main"
                disabled={!statusAccount}
                onClick={()=>dispatch({type: 'deactivateAccount'})}
            >
                Close account
            </button>

        </div>)
}