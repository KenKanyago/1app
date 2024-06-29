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
            
                <div className="flex flex-col gap-4 border border-gray-200 rounded-lg shadow">
                    {/* Wallets */}
                    <div className="flex gap-4">
                        <div className="flex grow shrink basis-300 max-w-400-h-1/2 bg-green-500 text-white p-4 rounded-lg shadow-md">Main Wallet</div>
                        <div className="flex grow shrink basis-300 max-w-400-h-1/2 bg-blue-500 text-black p-4 rounded-lg shadow-md">Shared Wallet</div>
                    </div>
                    {/* Article */}
                    <div>How to save money</div>
                </div>
                {/* ACC bal */}
                <div className=" border-gray-200 rounded-lg shadow">Account Balance</div>
            </div>
    {/* Income expeses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-gray-200 rounded-lg shadow">Income</div>
                <div className="border-gray-200 rounded-lg shadow">Expense</div>
            </div>
        </div>
    </div>
  )
}
