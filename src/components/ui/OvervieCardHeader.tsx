import React from 'react'
import {CaretRight } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';
interface ComponentProps{
    title:string;
    link:string;
}
const OvervieCardHeader:React.FC<ComponentProps> = ({title,link}) => {
 const navigate=useNavigate()
  return (
    <div className='w-full flex justify-between items-center'>
        <div className="font-bold text-xl text-gray-900">{title}</div>
        <div className="flex items-center text-gray-900 gap-2" onClick={()=>{navigate(`/${link}`)}}>
            <div className="text-sm text-gray-600 font-medium">See details</div>
            <CaretRight />
        </div>
    </div>
  )
}

export default OvervieCardHeader