import './App.css';
import Login from './pages/Login';
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import Budget_Container from './components/Budget-container';
import Expenses_categories_container from './components/Expenses-categories-container';
import FilterTransactions from './components/Filter-transactions';
import Add_transactions from './components/Add-transactions';
import './styles/base/base.css';
import "./styles/base/utilities.css";
import "./styles/base/colors.css";
import './styles/style.css';
import {Routes, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      {location.pathname !== "/" && <Navbar />}
      {location.pathname !== "/" && <Budget_Container />}

      <div className="transactions-categories-and-form">
        {location.pathname !== "/" && <Expenses_categories_container />}
        {location.pathname !== "/" && <Add_transactions />}
      </div>

      
      <div class="table-and-filter">
          {location.pathname !== "/" && <FilterTransactions />}
        </div>

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/transactions' element={<transactions />} />
      </Routes>
    </div>
  );
}

export default App;
