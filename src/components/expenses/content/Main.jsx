import './expenses.css'
import {GlobalProvider} from './GlobalState';
import Balance from '../component/Balance';
import IncomeExpense from '../component/IncomeExpense';
import TransactionList from '../component/TransactionList';
import AddTransactions from '../component/AddTransactions';

export default function Main() {
  return (
    <GlobalProvider>
      
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList /> 
        <AddTransactions />
        </div>
    </GlobalProvider>
  )
}
