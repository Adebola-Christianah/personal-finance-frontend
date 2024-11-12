import React from 'react';

interface CardItemProps {
  title: string;
  price: number;
  borderColor: string;
}

const CardItem: React.FC<CardItemProps> = ({ title, price, borderColor }) => {
  return (
    <div className="flex items-center space-x-4 h-10">
      <div className="w-1 h-full rounded-xl" style={{ backgroundColor: borderColor }}></div>
      <div>
        <p
          className="text-gray-600 text-xs truncate w-full md:max-w-[80px]" // set a max width to control truncation
          title={title} // show full text on hover
        >
          {title}
        </p>
        <p className="text-gray-900 text-sm font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default CardItem;
