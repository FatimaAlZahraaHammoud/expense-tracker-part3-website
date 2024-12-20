import React, {useState, useRef} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Add_transactions = ({addTransaction}) => {

    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        category: '',
        amount: '',
        type_of_transaction: '',
        date: '',
        notes: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!formData.category || !formData.amount || !formData.type_of_transaction || !formData.date || !formData.notes){
            setErrorMessage("Please fill all the form fields.");
        }

        const data = {
            UserId: localStorage.getItem("userId"), 
            category: formData.category,
            amount: parseFloat(formData.amount),
            type: formData.type_of_transaction,
            date: formData.date,
            notes: formData.notes
        };

        try{
            const response = await axios.post("http://localhost/FSW-SE-Factory/APIs/addTransaction.php", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.data.status === "Transaction Successful") {
                // Reset the form
                setFormData({
                    category: '',
                    amount: '',
                    type_of_transaction: '',
                    date: '',
                    notes: ''
                });

                addTransaction(response.data.transaction);
            }
            else {
                setErrorMessage("Failed to add transaction.");
            }
        }
        catch (error){
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const formRef = useRef(null);

    const handleCancel = () => {
        setFormData({
            category: '',
            amount: '',
            type_of_transaction: '',
            date: '',
            notes: ''
        });

        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <div className="add-transactions">
            <h3>Add Transaction</h3>
            <div className="add-form">
                <form ref={formRef} id="transactionForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" name="category" value={formData.category} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" id="amount" name="amount" value={formData.amount} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type_of_transaction">Type:</label>
                        <select id="type_of_transaction" name="type_of_transaction" value={formData.type_of_transaction} 
                            onChange={handleInputChange} 
                            required
                        >
                            <option value=""  disabled>Select Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input  type="date" id="date" name="date" value={formData.date} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes:</label>
                        <input type="text" id="notes" name="notes" value={formData.notes} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>
                    <div className="form-buttons">
                        <button id="cancelTransaction" className="bg-pink cancelTransaction" type="button" onClick={handleCancel}>Cancel</button>
                        <button id="submitTransaction" className="bg-green submitTransaction" type="submit">Add</button>
                    </div>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default Add_transactions;