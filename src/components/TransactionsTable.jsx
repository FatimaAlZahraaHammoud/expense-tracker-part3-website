import React, {useState, useEffect} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const TransactionsTable = () =>{

    const [transactions, setTransactions] = useState([]);
    const userId = localStorage.getItem("userId");
    console.log(userId);

    const loadTransactions = async () =>{
        const response = await axios.get(
            `http://localhost/FSW-SE-Factory/APIs/loadTransactions.php?userId=${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((response) => {
            if (response.data.status === "Load transaction successful") {
                setTransactions(response.data.transactions);
            }
            else{
                console.log("error", response.data.message);
            }
        })
        .catch((error) => {
            console.error("Error fetching transactions:", error);
        });
    }

    useEffect(()=>{
        loadTransactions();
    }, []);

    return(
        <div className="transactions-container" id="transactions-container">
            <div className="top-div">
                <h4>Expenses</h4>
            </div>

            <div className="transactions-table">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Notes</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody className="table-body" id="table-body">
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionsTable;