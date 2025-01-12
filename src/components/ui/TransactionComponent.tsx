import React from 'react';

type TransactionType = 'Wig' | 'Laptop' | 'LG LCD';

export interface TransactionProps {
  type: TransactionType;
  amount: number;
  description: string;
  date: string;
}

const getTransactionStyle = (type: TransactionType) => {
  switch (type) {
    case 'Wig':
      return { icon: '🔧', bgColor: 'bg-teal-500' };
    case 'Laptop':
      return { icon: '💻', bgColor: 'bg-gray-500' };
    case 'LG LCD':
      return { icon: '📺', bgColor: 'bg-brown-500' };
    default:
      return { icon: '❓', bgColor: 'bg-gray-500' };
  }
};

export const TransactionItem: React.FC<TransactionProps> = ({ type, amount, description, date }) => {
  const { icon, bgColor } = getTransactionStyle(type);

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white ${bgColor}`}>
        <span>{icon}</span>
      </div>
      <div className="ml-4 flex-1">
        <div className="font-semibold text-sm">{description}</div>
      
      </div>
      <div className="text-[#437C78] font-semibold ">
      ₦{amount.toLocaleString()}
      <div className="text-xs font-light text-gray-500">{date}</div>
      </div>
    </div>
  );
};

// Sample transactions
const transactions = [
  { type: 'Wig', amount: 500, description: 'Wig', date: '05 Nov 2024' },
  { type: 'Laptop', amount: 3000, description: 'Laptop', date: '06 Nov 2024' },
  { type: 'LG LCD', amount: 500, description: 'LG LCD', date: '12 Nov 2024' },
];

const TransactionList: React.FC = () => (
  <div>
    {transactions.map((transaction, index) => (
      <TransactionItem key={index} {...transaction} type={transaction.type as TransactionType} />
    ))}
  </div>
);

export default TransactionList;
