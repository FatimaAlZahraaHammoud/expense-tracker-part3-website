import './App.css';
import Login from './pages/Login';
import Transactions from "./pages/Transactions";
import './styles/style.css';
import "./styles/base/utilities.css";
import "./styles/base/colors.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/transactions' element={<transactions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
