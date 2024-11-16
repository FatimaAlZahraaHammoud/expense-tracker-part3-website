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

  return (
    <div>
      {/* Categories and Form Section */}
      <div className="transactions-categories-and-form">
        <Expenses_categories_container />
        <Add_transactions />
      </div>

      {/* Table and Filter Section */}
      <div className="table-and-filter">
        <FilterTransactions />
        <TransactionsTable />
      </div>
    </div>
  );
};

export default Transactions;
