import React, {useState, useEffect} from "react";
import TransactionDialog from "../components/TransactionDialog";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/style.css";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const TransactionsTable = ({ transactions, setTransactions }) =>{
    const [selectedTransaction, setSelectedTransaction] = useState(null);

    const userId = localStorage.getItem("userId");

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
        })
        .catch((error) => {

        });
    }

    useEffect(()=>{
        loadTransactions();
    }, []);

    // delete transaction
    const deleteTransaction = async(transactionId) => {
        try{
            const response = await axios.get(`http://localhost/FSW-SE-Factory/APIs/deleteTransaction.php?TransactionId=${transactionId}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.data.status === "Delete Success") {
                setTransactions((prevTransactions) =>
                    prevTransactions.filter((transaction) => transaction.id !== transactionId)
                );
            }
        } catch (error) {
        }
    }

    const handleRowClick = (transaction) => {
        setSelectedTransaction(transaction);
    };
    
      const handleCloseDialog = () => {
        setSelectedTransaction(null);
    };

      const handleSaveTransaction = async (updatedTransaction) => {
        try {
          const response = await axios.post('http://localhost/FSW-SE-Factory/APIs/updateTransaction.php', { ...updatedTransaction, TransactionId: updatedTransaction.id }, {
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.data.status === 'Update Success') {
            // Update the transaction in the state
            setTransactions((prevTransactions) =>
              prevTransactions.map((transaction) =>
                transaction.id === updatedTransaction.id ? updatedTransaction : transaction
              )
            );
          }
        } catch (error) {
        }
        handleCloseDialog();
    };
    

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
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} onClick={() => handleRowClick(transaction)} style={{ cursor: 'pointer' }}>
                                <td>{transaction.date}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.notes}</td>
                                <td><button className="bg-red-light delete-transaction" onClick={(e)=> {
                                    e.stopPropagation();
                                    deleteTransaction(transaction.id)}
                                }>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {selectedTransaction && (
                    <TransactionDialog
                    transaction={selectedTransaction}
                    onClose={handleCloseDialog}
                    onSave={handleSaveTransaction}
                    />
                )}
            </div>
        </div>
    );
}

export default TransactionsTable;