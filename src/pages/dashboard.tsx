import { useState } from 'react';
import { motion } from 'framer-motion';
import RectIcon from '../assets/Union.svg';
import ArrowUP from '../assets/Arrow 14.svg';
import ArrowDown from '../assets/Arrow 14 (1).svg';
import DashboardCard from '@/components/ui/dashboardCard';
import { AgCharts } from 'ag-charts-react';

const Dashboard = () => {
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: 'Money Flow',
    },
    data: [
      { month: 'Jan', Inflow: 123500, Outflow: 162000 },
      { month: 'Feb', Inflow: 93300, Outflow: 45000 },
      { month: 'Mar', Inflow: 100385, Outflow: 81000 },
      { month: 'Apr', Inflow: 123570, Outflow: 99970 },
      { month: 'May', Inflow: 11780, Outflow: 80000 },
      { month: 'Jun', Inflow: 97600, Outflow: 98700 },
      { month: 'Jul', Inflow: 45000, Outflow: 10000 },
      { month: 'Aug', Inflow: 45000, Outflow: 95400 },
      { month: 'Sep', Inflow: 10800, Outflow: 95000 },
      { month: 'Oct', Inflow: 10800, Outflow: 60000 },
      { month: 'Nov', Inflow: 128000, Outflow: 200000 },
    ],
    series: [
      { type: 'bar', xKey: 'month', yKey: 'Outflow' },
      { type: 'bar', xKey: 'month', yKey: 'Inflow' },
    ],
  });

  return (
    <div className="w-full">
      {/* Dashboard Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 }}
      >
        <motion.div whileHover={{ scale: 1.05 }}>
          <DashboardCard
            percentage={0.29}
            amount="100,000"
            icon={<img src={RectIcon} alt="icon" />}
            text="Total balance"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <DashboardCard
            percentage={0.29}
            amount="100,000"
            icon={<img src={ArrowUP} alt="icon" />}
            text="Transaction Outflow"
          />
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <DashboardCard
            percentage={0.29}
            amount="100,000"
            icon={<img src={ArrowDown} alt="icon" />}
            text="Transaction Inflow"
          />
        </motion.div>
      </motion.div>

      {/* Chart */}
      <motion.div
        className="bg-white rounded-xl px-4 py-8 my-4 md:my-8 lg:my-12 border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AgCharts options={chartOptions} />
      </motion.div>
    </div>
  );
};

export default Dashboard;
