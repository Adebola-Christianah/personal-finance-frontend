"use client"
import React from 'react'
interface HeaderProps{
    buttonText:string;
    icon?:JSX.Element;
    pageTitle:string;
}
const PageHeader:React.FC<HeaderProps> = ({buttonText,icon,pageTitle}) => {
  return (
    <div className='flex justify-between items-center my-6'>
        <div className='text-gray-900 font-bold text-3xl '>{pageTitle}</div>
        <button className='flex bg-gray-800 px-3 py-2 rounded-md text-white items-center gap-2 font-medium text-sm'>{icon}<div>{buttonText}</div></button>
    </div>
  )
}

export default PageHeader