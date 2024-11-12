
import {BellDot} from 'lucide-react'
import Faria from '../../assets/fariah.png'
import { Link } from 'react-router-dom'
import { Coins } from 'lucide-react';
const TopNav = () => {
  return (
    <div className="flex flex-wrap justify-between h-16 items-center mx-auto w-full gap-4 md:gap-0 py-2 px-4 bg-white fixed top-0 left-0 z-1">
        <Link to="/" className="flex items-center">
        <Coins color='#277c7a' />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Finance</span>
        </Link>
        <div className="flex gap-3 items-center">
        <div className="bg-blue-50 items-center justify-center flex  rounded-md h-9 w-9"><BellDot color="#255bb1" height={24} width={24}/></div>
        <img src={Faria} alt="" className='rounded-md h-10 w-10'/>
        </div>
    </div>
  )
 
}

export default TopNav