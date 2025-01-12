/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent } from 'react';
import AsyncSelect from 'react-select/async';
import Faria from '../assets/fariah.png';
import { Plus } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import Modal from '../components/ui/ModalComponent';
import ColorSelect, { ColourOption } from '@/components/ui/ColorSelect';
import { SingleValue } from 'react-select';
import { DatePicker } from 'rsuite';
import { Checkbox } from 'rsuite';
import { motion } from 'framer-motion';
// Define the Transaction type
interface Transaction {
  id: number;
  recipient: string;
  avatar?: string;
  category: string;
  date: string;
  amount: number;
}

// Sample transaction data with avatar URLs
const transactionsData: Transaction[] = [
  { id: 1, recipient: 'Wig', avatar: Faria, category: 'PersonalCare', date: '11/6/2024', amount: 500 },
  { id: 2, recipient: 'Laptop', category: 'General', date: '11/7/2024', amount: 3000 },
  { id: 3, recipient: 'LG LCD', avatar: 'https://flowbite.com/docs/images/logo.svg', category: 'General', date: '11/13/2024', amount: 500 },
];

const sortOptions = [
  { value: 'Latest', label: 'Latest' },
  { value: 'Oldest', label: 'Oldest' },
  { value: 'AtoZ', label: 'A to Z' },
  { value: 'ZtoA', label: 'Z to A' },
  { value: 'Highest', label: 'Highest' },
  { value: 'Lowest', label: 'Lowest' },
];

const categoryOptions = [
  { value: 'All Transactions', label: 'All Transactions' },
  { value: 'PersonalCare', label: 'Personal Care' },
  { value: 'General', label: 'General' },
];

const categoryColors: { [key: string]: string } = {
  PersonalCare: '#f0c040', 
  General: '#40c0f0',
};

const getCategoryColor = (category: string) => {
  return categoryColors[category] || '#ccc';
};

const TransactionTable: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Latest');
  const [filterCategory, setFilterCategory] = useState('All Transactions');
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState<SingleValue<ColourOption>>(null);

  const filteredTransactions = transactionsData
    .filter(transaction =>
      transaction.recipient.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === 'All Transactions' || transaction.category === filterCategory)
    )
    .sort((a, b) =>
      sort === 'Latest' ? new Date(b.date).getTime() - new Date(a.date).getTime() :
      sort === 'Oldest' ? new Date(a.date).getTime() - new Date(b.date).getTime() :
      sort === 'AtoZ' ? a.recipient.localeCompare(b.recipient) :
      sort === 'ZtoA' ? b.recipient.localeCompare(a.recipient) :
      sort === 'Highest' ? b.amount - a.amount :
      a.amount - b.amount
    );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleSortChange = (selectedOption: any) => setSort(selectedOption.value);
  const handleFilterChange = (selectedOption: any) => setFilterCategory(selectedOption.value);
  const handleColorChange = (selectedOption: SingleValue<ColourOption>) => setSelectedColor(selectedOption);
    const maxLength = 30;
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.slice(0, maxLength)); // Limit input to maxLength
  };
  return (
    <div>
      <PageHeader icon={<Plus color="#fbf4f4" />} pageTitle="Transactions" buttonText="New Transaction"   onclick={() => setShowModal(true)}/>
      
      <div className="container mx-auto p-4 md:p-8 border rounded-xl bg-white">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <input
            type="text"
            placeholder="Search transaction"
            value={search}
            onChange={handleSearchChange}
            className="border rounded-lg p-2 mb-2 md:mb-0 w-full md:w-1/3"
          />
          <div className="flex gap-4 w-full md:w-auto">
            <AsyncSelect
              cacheOptions
              defaultOptions={sortOptions}
              defaultValue={sortOptions[0]}
              onChange={handleSortChange}
              className="w-full md:w-auto"
            />
            <AsyncSelect
              cacheOptions
              defaultOptions={categoryOptions}
              defaultValue={categoryOptions[0]}
              onChange={handleFilterChange}
              className="w-full md:w-auto"
              placeholder="Filter by Category"
            />
          </div>
        </div>
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} modalTitle='Add new transaction'>
         <div className="flex flex-col space-y-1">
      <label htmlFor="transactionName" className="text-gray-600 text-sm font-semibold">
        Transaction Name
      </label>
      <div className="relative">
        <input
          type="text"
          id="transactionName"
          placeholder="e.g Urban Services Hub"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={maxLength}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none  focus:border-gray-800 focus:border-2"
        />
        <span className="absolute right-2 bottom-2 text-gray-500 text-xs">
          {maxLength - inputValue.length} characters left
        </span>
      </div>
    </div>
          <p className="mt-4 mb-1 font-semibold text-gray-500">Transaction Date</p>
          <DatePicker block placeholder='Pick a date' format="MMM dd, yyyy" />
          <p className="mt-4 mb-1 font-semibold text-gray-500">Category</p>
          <ColorSelect value={selectedColor} onChange={handleColorChange} />
          <div className="mt-4">
          <label htmlFor="transactionName" className="text-gray-600 text-sm font-semibold mb-2 ">
        Amount
      </label>
        <input
          type="text"
          id="transactionName"
          placeholder="e.g Urban Services Hub"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={maxLength}
          className="w-full rounded-lg border border-gray-300  px-3 py-2 focus:outline-none  focus:border-gray-800 focus:border-2"
        />
      </div>
      <div className="flex items-center mt-4">
        
        <Checkbox defaultChecked color="violet">
        Recurring
        </Checkbox>
      </div>
          <button
            onClick={() => setShowModal(false)}
            className="bg-gray-800 w-full text-white rounded-lg px-4 py-2 mt-4 h-12"
          >
            Close
          </button>
        </Modal>
</motion.div>
        {/* Transaction Table */}
        <div className="overflow-x-auto">
          <table className="md:w-full w-[600px] border-collapse">
            <thead>
              <tr className="border-b">
                <td className="p-3 text-gray-500 font-light text-xs text-left">Recipient / Sender</td>
                <td className="p-3 text-gray-500 font-light text-xs text-left">Category</td>
                <td className="p-3 text-gray-500 font-light text-xs text-left">Transaction Date</td>
                <td className="p-3 text-gray-500 font-light text-xs text-right">Amount</td>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map(transaction => (
                 <motion.tr
                 key={transaction.id}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.2 }}
                 className="border-b"
               >
                  <td className="p-3 flex items-center text-xs font-semibold">
                    {transaction.avatar ? (
                      <img
                        src={transaction.avatar}
                        alt={transaction.recipient}
                        className="w-8 h-8 rounded-full mr-2 object-contain"
                      />
                    ) : (
                      <div
                        className="flex items-center justify-center rounded-full"
                        style={{
                          backgroundColor: getCategoryColor(transaction.category),
                          width: '40px',
                          height: '40px',
                          marginRight: '8px',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        {transaction.recipient.charAt(0)}
                      </div>
                    )}
                    {transaction.recipient}
                  </td>
                  <td className="p-3 text-gray-500 text-xs">{transaction.category}</td>
                  <td className="p-3 text-gray-500 text-xs">{transaction.date}</td>
                  <td className="p-3 text-sm font-semibold text-right text-[#277c7a]">
                    +₦{transaction.amount.toFixed(2)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
