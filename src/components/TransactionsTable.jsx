import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const TransactionsTable = () =>{
    return(
        <div className="transactions-container" id="transactions-container">
            <div className="top-div">
                <h4>Expenses</h4>
            </div>

            <div className="transactions-table">
                <table>
                    <thead>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Notes</th>
                        <th>Delete</th>
                    </thead>

                    <tbody className="table-body" id="table-body">
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionsTable;