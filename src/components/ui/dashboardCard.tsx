
interface Card{
    icon:JSX.Element
    amount:string;
    percentage:number;
    text:string;

}
const DashboardCard:React.FC<Card> = ({icon,amount,percentage,text}) => {
 
  return (
    <div className="w-full">
         <div className='bg-white shadow rounded-xl p-4'>
        <div className="flex flex-col">
            <div className="bg-blue-600 flex items-center justify-center rounded-md h-9 w-10">{icon}
            </div>
            <div className="self-end">
                <div className="bg-green-100 px-4 rounded-full text-xs text-blue-600">+ {percentage}%</div>
            </div>
            <div className="font-bold text-3xl my-2"> ₦{amount}</div>
            <div className="text-gray-500 text-sm">{text}</div>
        </div>
       
    </div>
    
    </div>
 
  )
}

export default DashboardCard