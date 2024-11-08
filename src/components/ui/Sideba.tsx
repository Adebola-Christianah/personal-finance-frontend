'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bell, MessageCircle, Settings, Activity, Menu, X, ChartNoAxesCombined } from 'lucide-react';
import {
  ArrowFatLinesLeft,
  ArrowsDownUp,
  ChartDonut,
  House,
  Jar,
  Receipt,
} from '../../assets/icons.tsx';

interface LinkItem {
  id: number;
  link: string;
  name: string;
  icon: JSX.Element; // JSX element for SVG icons
}

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // State to toggle sidebar visibility
  const location = useLocation();

  const links: LinkItem[] = [
    {
      id: 0,
      name: 'Overview',
      icon: <House />,
      link: '/',
    },
    {
      id: 1,
      name: 'Transactions',
      icon: <ArrowsDownUp />,
      link: '/transactions',
    },
    {
      id: 2,
      name: 'Budgets',
      icon: <ChartDonut />,
      link: '/budgets',
    },
    {
      id: 3,
      name: 'Pots',
      icon: <Jar />,
      link: '/pots',
    },
    {
      id: 4,
      name: 'Recurring bills',
      icon: <Receipt />,
      link: '/recurring-bills',
    },
    {
      id: 5,
      name: 'Stats',
      icon: <ChartNoAxesCombined />,
      link: '/statistics',
    }
  ];

  // Set active link based on the current pathname
  const activeLinkId = links.find(link => link.link === location.pathname)?.id;

  return (
    <div
      className={`hidden lg:flex h-screen lg:w-[20%] bg-blue-500 shadow top-16 flex-col fixed left-0 transition-transform sm:transform-none ${
        isSidebarOpen ? 'transform-none' : '-translate-x-full'
      }`}
    >
      {/* Hamburger Menu for Mobile */}
      <button
        className="sm:hidden p-4 text-white focus:outline-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Links with animation */}
      <AnimatePresence>
        <ul className="mt-6 space-y-4">
          {links.map((link) => (
            <motion.li
              key={link.id}
              className={`flex justify-between items-center p-3 mr-4 cursor-pointer hover:bg-white hover:text-gray-800
                ${activeLinkId === link.id ? 'bg-white border-l-4 border-[#ffa03a]' : ''}
                rounded-tr-md rounded-br-md
              `}
              
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={link.link}
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className={`mr-2 ${activeLinkId === link.id ? 'text-[#ffa03a]' : 'text-gray-300'}`}>
                  {link.icon}
                </span>
                <span className={` ${activeLinkId === link.id ? 'text-gray-800' : 'text-gray-300'}`}>{link.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>

      {/* Icons at the bottom */}
      <div className="mt-auto w-full flex items-center justify-between bg-gray-800 p-4">
        <button aria-label="show notifications" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
          <Bell className="text-gray-300" />
        </button>
        <button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
          <MessageCircle className="text-gray-300" />
        </button>
        <button aria-label="open settings" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
          <Settings className="text-gray-300" />
        </button>
        <button aria-label="open logs" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
          <Activity className="text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
