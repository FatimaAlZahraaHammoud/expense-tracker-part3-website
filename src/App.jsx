import './App.css';
import Login from './pages/Login';
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import Budget_Container from './components/Budget-container';
import Expenses_categories_container from './components/expenses-categories-container';
import './styles/style.css';
import "./styles/base/utilities.css";
import "./styles/base/colors.css";
import {Routes, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      {location.pathname !== "/" && <Navbar />}
      {location.pathname !== "/" && <Budget_Container />}

      <div class="transactions-categories-and-form">
        {location.pathname !== "/" && <Budget_Container />}
      </div>

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/transactions' element={<transactions />} />
      </Routes>
    </div>
  );
}

export default App;
