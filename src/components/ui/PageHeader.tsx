"use client"
import React, { MouseEventHandler } from 'react'
interface HeaderProps{
    buttonText:string;
    icon?:JSX.Element;
    pageTitle:string;
    onclick?:MouseEventHandler
}
const PageHeader:React.FC<HeaderProps> = ({buttonText,icon,pageTitle,onclick}) => {
  return (
    <div className='flex justify-between items-center my-6'>
        <div className='text-gray-900 font-bold text-3xl '>{pageTitle}</div>
        <button className='flex bg-gray-800 px-3 py-2 rounded-md text-white items-center gap-2 font-medium text-sm' onClick={onclick}>{icon}<div>{buttonText}</div></button>
    </div>
  )
}

export default PageHeader