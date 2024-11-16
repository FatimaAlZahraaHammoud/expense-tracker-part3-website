import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Card =  ({ amountId, amountClassName, label, amount, bgClassName }) => {
    return (
        
        <div className={`card ${bgClassName}`}>
            <div className="amount">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-dollar-sign"
                >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <p className={amountClassName} id={amountId}>
                    ${amount.toFixed(2)}
                </p>
            </div>
            <p className="type">{label}</p>
        </div>
    );
};

const Budget_Container = ({income, expense, budget}) => {

    const incomeBgClass = income >= expense ? "bg-green-light" : "bg-red-light";
    const expenseBgClass = expense > income ? "bg-red-light" : "bg-green-light";
    const budgetBgClass = income >= budget ? "bg-green-light" : "bg-red-light";

    return (
        <div className="budget-container">
            <Card amountId="income-money" amountClassName="income-money" label="Total income" amount={income} bgClassName={incomeBgClass}/>
            <Card amountId="expense-money" amountClassName="expense-money" label="Total expense" amount={expense} bgClassName={expenseBgClass}/>
            <Card amountId="budget-money" amountClassName="budget-money" label="Total budget" amount={budget} bgClassName={budgetBgClass}/>
        </div>
    );
};

export default Budget_Container;