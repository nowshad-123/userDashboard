import Dashboard from './pages/dashboardPage/Dashboard';
import Home from './pages/homePage/Home'
import { Routes, Route } from "react-router-dom"
import Transaction from './pages/transactionPage/Transaction';
import Schedule from './pages/schedulePage/Schedule';
import User from './pages/userPage/User';
import { Settings } from './pages/settingPage/Settings';




function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/transaction' element={<Transaction />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/user' element={<User />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
