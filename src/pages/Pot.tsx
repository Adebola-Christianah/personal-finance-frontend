import React from 'react';
import { motion } from 'framer-motion';

interface PotCardProps {
  title: string;
  savedAmount: number;
  targetAmount: number;
  color: string;
}

const PotDashboard: React.FC = () => {
  const data: PotCardProps[] = [
    { title: 'Detty December', savedAmount: 0, targetAmount: 5000, color: '#a23e48' },
    { title: 'House Rent', savedAmount: 0, targetAmount: 5800, color: '#d9534f' },
    { title: 'Land', savedAmount: 1142, targetAmount: 10000, color: '#5cb85c' },
    { title: 'Rainy Days', savedAmount: 0, targetAmount: 3000, color: '#f0ad4e' },
    { title: 'Travel', savedAmount: 0, targetAmount: 7000, color: '#6c757d' },
  ];

  return (
    <div className="">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-screen-lg">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="w-full p-4 bg-white shadow-lg rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
              <button className="text-gray-400">•••</button>
            </div>
            <div className="flex items-center justify-between mt-8 mb-4">
            <div className="text-gray-500">Total Saved</div>
            <div className="text-3xl font-bold">₦{item.savedAmount.toFixed(2)}</div>
            </div>
           
            <div className="my-2">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full"
                  style={{ width: `${(item.savedAmount / item.targetAmount) * 100}%`, backgroundColor: item.color }}
                />
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span className='mt-2'>{((item.savedAmount / item.targetAmount) * 100).toFixed(2)}%</span>
                <span className='mt-2'>Target of ₦{item.targetAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between mt-8 mb-4">
              <button className="w-[48%] py-3 bg-[#f8f5f1] text-gray-700 rounded-lg">+ Add Money</button>
              <button className="w-[48%] py-3 bg-[#f8f5f1] text-gray-700 rounded-lg">Withdraw</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PotDashboard;
