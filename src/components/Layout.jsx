import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Dashboard from "../pages/Dashboard"

export default function Layout({children}) {
  return (
    <div>
        

        <div className="flex flex-col gap-2 relative">
            <Navbar />
            {children}
        </div>
        

    </div>
  )
}
