import React, {useState, useEffect} from "react";
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
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [budget, setBudget] = useState(0);

  // Calculate income and expense totals
  const calculateTotals = (transactions) => {
    const incomeTotal = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);

    const expenseTotal = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);

    setIncome(incomeTotal);
    setExpense(expenseTotal);
    setBudget(incomeTotal - expenseTotal);
  };

  useEffect(() => {
    setFilteredTransactions(transactions);
    calculateTotals(transactions);
  }, [transactions]);

  const addTransactionToState = (newTransaction) => {
    setTransactions((prevTransactions) => {
      const updatedTransactions = [...prevTransactions, newTransaction];
      return updatedTransactions;
    });
  };

  return (
    <div>
      <Budget_Container income={income} expense={expense} budget={budget}/>
      <div className="transactions-categories-and-form">
        <Expenses_categories_container />
        <Add_transactions addTransaction = {addTransactionToState}/>
      </div>

      <div className="table-and-filter">
        <FilterTransactions transactions={transactions} setFilteredTransactions={setFilteredTransactions}/>
        <TransactionsTable transactions={filteredTransactions} setTransactions={setTransactions}/>
      </div>
    </div>
  );
};

export default Transactions;
