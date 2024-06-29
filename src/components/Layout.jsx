
import Navbar from "./Navbar"


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
