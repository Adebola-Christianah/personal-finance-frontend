
import { LogOut } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader'
import OvervieCardHeader from '@/components/ui/OvervieCardHeader';
import { JarLight } from '@/assets/icons';
import CardItem from '@/components/ui/CardItem';
import DoughnutChart from '@/components/ui/doughnourght';
import TransactionList from '@/components/ui/TransactionComponent';
import Card from '@/components/ui/RecurringBillsCard';

const Overview = () => {
  return (
    <div>
      <PageHeader pageTitle='Overview' icon={<LogOut />} buttonText='Logout' />
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-4'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className='bg-gray-800 p-8 rounded-xl text-white'>
          <p className='font-normal'>Current Balance</p>
          <p className='font-semibold text-2xl mt-2'>₦849,515.00</p>
        </motion.div>
        <motion.div className='bg-white p-8 rounded-xl text-gray-800'>
          <p className='font-normal'>Income</p>
          <p className='font-semibold text-2xl mt-2'>₦3000,120.00</p>
        </motion.div>
        <motion.div className='bg-white p-8 rounded-xl text-gray-800'>
          <p className='font-normal'>Expenses</p>
          <p className='font-semibold text-2xl mt-2'>₦5895.00</p>
        </motion.div>
      </motion.div>
      
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-4 my-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <motion.div className="bg-white rounded-xl p-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <OvervieCardHeader title='Pot' link='pots' />
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <div className="bg-[#f8f5f1] rounded-lg w-full md:w-60 h-24 p-4 flex items-center gap-4">
                <JarLight height={32} width={32} />
                <div className='text-gray-500'>
                  <div className="text-base">Pots</div>
                  <div className="text-gray-900 font-semibold text-2xl">₦110,000</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <CardItem title='Detty December' price={100} borderColor='#991B1B' />
                <CardItem title='Detty December' price={100} borderColor='#991B1B' />
                <CardItem title='Detty December' price={100} borderColor='#991B1B' />
                <CardItem title='Detty December' price={100} borderColor='#991B1B' />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-xl p-4 my-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <OvervieCardHeader title='Transactions' link='transactions' />
            <TransactionList />
          </motion.div>
        </div>
        
        <div>
          <motion.div
            className="bg-white rounded-xl p-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <OvervieCardHeader title='Budget' link='budgets' />
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <div className="w-3/4">
                <DoughnutChart />
              </div>
              <div className="grid grid-cols-1 gap-4 h-full w-1/4">
                <CardItem title='Detty December' price={100} borderColor="#ff6384" />
                <CardItem title='Detty December' price={100} borderColor="#ffce56" />
                <CardItem title='Detty December' price={100} borderColor="#36a2eb" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-xl p-4 my-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <OvervieCardHeader title='Recurring Bills' link='recrring-bills' />
            <Card borderColor="#2d7f5e" title="Paid Bills" amount={0.00} />
            <Card borderColor="purple" title="Total Upcoming" amount={0.00} />
            <Card borderColor="gold" title="Due Soon" amount={0.00} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Overview;
