import { Link } from "react-router-dom";


export default function Sidebar(){
    return(

        < >
        <div className="flex items-center mb-8">
        <span className="text-xl font-bold ml-2">My Budgets</span>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link to='/' className="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to='/income' className="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Income</span>
              </Link>
            </li>

            <li>
              <Link to='/expenses' className="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Expenses</span>
              </Link>
            </li>

            <li>
              <Link to='/transactions' className="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Transactions</span>
              </Link>
            </li>

            <li>
              <Link to='/transactions' className="flex items-center px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                <span>Expense Tracker</span>
              </Link>
            </li>
            </ul>

            
          </nav>
      </>
    )
}