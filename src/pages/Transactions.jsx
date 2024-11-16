import React, {useState} from "react";
import Add_transactions from "../components/Add-transactions";
import Expenses_categories_container from "../components/Expenses-categories-container";
import FilterTransactions from "../components/Filter-transactions";
import Budget_Container from "../components/Budget-container";
import TransactionsTable from "../components/TransactionsTable";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Transactions = () => {

  const [transactions, setTransactions] = useState([]);

  const addTransactionToState = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <div>
      <div className="transactions-categories-and-form">
        <Expenses_categories_container />
        <Add_transactions addTransaction = {addTransactionToState}/>
      </div>

      <div className="table-and-filter">
        <FilterTransactions />
        <TransactionsTable transactions={transactions} setTransactions={setTransactions}/>
      </div>
    </div>
  );
};

export default Transactions;
