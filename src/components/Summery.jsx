import Card from "./Card"

export default function Summery() {
    const data=[
        {
        title:"Total Period Income",
        text:"Ksh:1,680,000",
        color:"green-600",
    },

    {
        title:"Total Period Expenses",
        text:"Ksh:1,285,000",
        color:"red-600"
    },

    {
        title:"My Savings",
        text:"Ksh:395,000",
        color:"green-600"
    },
];
  return (
    
        <div className="card flex space-x"> 
            {data.map((item, index)=>(
                <Card key={index}{...item}/>
            ))}
    
        </div>
    
     
  )
}
