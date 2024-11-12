import {useState} from 'react';
import { motion } from 'framer-motion';
import TransactionCard from '@/components/TransactionCard';
import DoughnutChart from '@/components/ui/doughnourght';
// import { SingleValue } from 'react-select';
import { Plus } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';

const Budject = () => {
  type Category = {
    name: string;
    amountSpent: number;
    budget: number;
    color: string;
  };

  const categories: Category[] = [
    { name: 'Lifestyle', amountSpent: 0, budget: 40000, color: '#FF6384' },
    { name: 'PersonalCare', amountSpent: 612, budget: 30000, color: '#FFCE56' },
    { name: 'Entertainment', amountSpent: 0, budget: 30000, color: '#36A2EB' },
  ];
  const [showModal, setShowModal] = useState(false);
  // const [selectedColor, setSelectedColor] = useState<SingleValue<ColourOption>>(null);
  return (
    <div> 
       <PageHeader icon={<Plus color="#fbf4f4" />} pageTitle="Budgets" buttonText="New Budget"   onclick={() => setShowModal(true)}/>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Spending Summary Section */}
        <motion.div 
          className="bg-white h-full w-full md:w-[45%] rounded-xl p-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex w-full justify-center">
            <DoughnutChart />
          </div>
          <div className="mt-4 font-bold text-xl text-gray-800">Spending Summary</div>
          <div className="my-4">
            {categories.map((category, index) => (
              <motion.div 
                key={category.name} 
                className="flex items-center space-x-4 border-b py-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className={`w-1  h-8`} style={{background:category.color}}/>
                <div className="flex-1">
                  <span className="font-medium text-gray-700">{category.name}</span>
                </div>
                <div className="text-gray-900 font-semibold">
                  ${category.amountSpent.toFixed(2)}{' '}
                  <span className="text-gray-500 font-normal">of ${category.budget.toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transaction Cards Section */}
        <motion.div 
          className="space-y-4 w-full md:w-[55%]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <TransactionCard 
            title="Lifestyle" 
            maxAmount={40000} 
            spentAmount={0} 
            latestSpending=""
            color='#FF6384'
          />
          <TransactionCard 
            title="PersonalCare" 
            maxAmount={30000} 
            spentAmount={612} 
            latestSpending="Haircut - $50"
            color='#FFCE56'

          />
          <TransactionCard 
            title="Entertainment" 
            maxAmount={30000} 
            spentAmount={0} 
            color='#36A2EB'
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Budject;
