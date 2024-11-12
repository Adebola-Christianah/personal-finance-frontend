import React from 'react';

interface CardProps {
  borderColor: string;
  title: string;
  amount: number;
}

const Card: React.FC<CardProps> = ({ borderColor, title, amount }) => {
  return (
    <div
      className="flex justify-between items-center p-4 bg-[#f8f5f1] rounded-lg mt-4"
      style={{ borderLeft: `4px solid ${borderColor}` }}
    >
      <span className="text-gray-700">{title}</span>
      <span className="text-black font-semibold">
      ₦{amount.toFixed(2)}</span>
    </div>
  );
};

export default Card;
