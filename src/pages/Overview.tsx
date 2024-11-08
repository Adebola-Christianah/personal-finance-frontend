import React from 'react'
import { LogOut } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader'
import OvervieCardHeader from '@/components/ui/OvervieCardHeader';
import { JarLight } from '@/assets/icons';
const Overview = () => {
  return (
    <div>
        <PageHeader pageTitle='Overview' icon=<LogOut/> buttonText='Logout'/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-gray-800 p-8 rounded-xl text-white'>
                <p className='font-normal'> Current Balance</p>
                <p className='font-semibold text-3xl mt-2'>₦849,515.00</p>
            </div>
            <div className='bg-white p-8 rounded-xl text-gray-800'>
                <p className='font-normal'> Income</p>
                <p className='font-semibold text-3xl mt-2'>₦3000,120.00</p>
            </div>
            <div className='bg-white p-8 rounded-xl text-gray-800'>
                <p className='font-normal'> Expenses</p>
                <p className='font-semibold text-3xl mt-2'>₦5895.00</p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
            <div>
                <div className="bg-white rounded-xl p-4">
                    <OvervieCardHeader title='Pot' link='pots'/>
                    <div className="flex flex-col md:flex-row gap-4 py-6">
                        <div className="bg-slate-100 rounded-lg w-full md:w-60 h-24 p-4 flex items-center gap-4  ">
                            <JarLight height={32} width={32} />
                            <div className='text-gray-500'>
                                <div className="text-base">Pots</div>
                                <div className="text-gray-900 font-semibold text-4xl">₦0</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview