import React from 'react';
import { motion } from 'framer-motion';

interface TransactionCardProps {
  title: string;
  maxAmount: number;
  spentAmount: number;
  latestSpending?: string;
  color?:string
}

const TransactionCard: React.FC<TransactionCardProps> = ({ 
  title, 
  maxAmount, 
  spentAmount, 
  latestSpending,color
}) => {
  const freeAmount = maxAmount - spentAmount;

  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Title */}
      <div className="mb-2 ">
        <motion.p 
          className="text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-2 items-center">
          <div className="h-4 w-4 rounded-full " style={{backgroundColor:color?color:'#6b7280'}}></div>
          <div> {title}</div>
          </div>
          
         
        </motion.p>
        <p className="text-sm text-gray-600">Maximum of ${maxAmount.toFixed(2)}</p>
      </div>

      {/* Progress Bar */}
      <div className="h-4 bg-[#f8f5f1] rounded-full mb-2">
        <motion.div
          className="h-full bg-gray-500 rounded-full"
          style={{ width: `${(spentAmount / maxAmount) * 100}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${(spentAmount / maxAmount) * 100}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      {/* Spending Details */}
      <div className="flex gap-36 text-sm mb-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="font-semibold text-gray-900">Spent</div>
          <div className="text-gray-500">${spentAmount.toFixed(2)}</div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="font-semibold text-gray-900">Free</div>
          <div className="text-gray-500">${freeAmount.toFixed(2)}</div>
        </motion.div>
      </div>

      {/* Latest Spending */}
      <motion.div 
        className="bg-[#f8f5f1] p-4 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between text-sm">
          <span className="font-semibold">Latest Spending</span>
          <motion.span 
            className="text-gray-700 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            See All
          </motion.span>
        </div>
        <p className="text-gray-500 text-sm text-center my-3">
          {latestSpending || "You haven't made any spendings yet."}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TransactionCard;
