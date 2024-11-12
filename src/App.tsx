import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from './components/ui/TopNav';
import Navbar from './components/ui/Sideba';
import Dashboard from './pages/dashboard';
import Overview from './pages/Overview'; 
import TransactionTable from './pages/Transactions';
import Budject from './pages/Budject';
import PotDashboard from './pages/Pot';

function App() {
  return (
    <BrowserRouter>
    <div className="w-full">
    <TopNav />
      <Navbar />
      <div className=" w-full  lg:w-[80%] lg:ml-[20%] mt-16 p-4">
      <Routes>
        <Route path='/statistics' element={<Dashboard />} /> 
        <Route path='/transactions' element={<TransactionTable/>} /> 
        <Route path='/' element={<Overview/>} /> 
        <Route path='/budgets' element={<Budject/>} /> 
        <Route path='/pots' element={<PotDashboard/>} /> 
      </Routes>
      </div>
   
    </div>
   
    </BrowserRouter>
  );
}

export default App;
