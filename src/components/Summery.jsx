import Card from "./Card"

export default function Summery() {

  return (
    <div className=" flex space-x-4 border border-gray-200 rounded-lg shadow">
        <Card 
            className="card"
            title="Total Period Income"
            text="Ksh:1,680,000"
            color="green-600"
            />
   
        
        <Card
            className="card"
            title="Total Period Expenses"
            text="Ksh:1,285,000"
            color="red-600"
            />
        

        <Card
            className="card"
            title="My Savings"
            text="Ksh:395,000"
            color="green-600"
            />
        
</div>
            
  )
}
