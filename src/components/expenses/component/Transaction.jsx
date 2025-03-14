import React, {useContext} from 'react'
import { GlobalContext } from '../content/GlobalState'


const Transaction = ({transaction}) => {
const {deleteTransaction} = useContext( GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
       <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
             {transaction.text} <span>{sign}Ksh:{Math.abs(transaction.amount)}</span>
             <button class="delete-btn"
            onClick={() =>deleteTransaction(transaction.id)} >x</button>
           </li>
    </div>
  )
}

export default Transaction
