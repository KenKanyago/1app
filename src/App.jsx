
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashbord from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Income from './pages/Income';
import Expenses from './pages/Expenses';
import ExpenseTracker from './pages/ExpenseTracker';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout><Dashbord/></Layout>}/>
      <Route path='/transactions' element={<Layout><Transactions/></Layout>}/>
      <Route path='/income' element={<Layout><Income/></Layout>}/>
      <Route path='/expenses' element={<Layout><Expenses/></Layout>}/>
      <Route path='/expense-tracker' element={<Layout><ExpenseTracker/></Layout>}/>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
