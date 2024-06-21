import Card from "../components/Card"
import Sidebar from "../components/Sidebar"
import Summery from "../components/Summery"

export default function Dashboard() {
  return (

    <div className="flex h-screen w-screen gap-6 p-6 bg-blue-200 ">
    
    {/* Sidebar */}
        <div>
            <Sidebar />
        </div>
            
    {/* Contenet */}
        <div className="grid grid-cols-1 grid-rows-3 gap-6 w-screen bg-gray-200">

    {/* Summery */}
            <div className="flex flex-row space-between gap-4">
                <Summery />
            </div>
    {/* Wallet, how to save article and ACC bal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                <div className="flex flex-col gap-4">
                    {/* Wallets */}
                    <div className="flex gap-4">
                        <div>green</div>
                        <div>Blue</div>
                    </div>
                    {/* Article */}
                    <div>How to save money</div>
                </div>
                {/* ACC bal */}
                <div>Account Balance</div>
            </div>
    Income expeses
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>Income</div>
                <div>Expense</div>
            </div>
        </div>
    </div>
  )
}
