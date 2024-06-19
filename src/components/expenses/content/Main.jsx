import React from 'react'
import './components/content/expenses.css'

export default function Main() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList /> 
        <AddTransactions />
        </div>
    </GlobalProvider>
  )
}
