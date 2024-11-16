import React, {useState, useRef} from "react";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/style.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const TransactionDialog = ({transaction, onClose, onSave}) => {
    const [editedTransaction, setEditedTransaction] = useState(transaction);
    const [isEditable, setIsEditable] = useState(false);  

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedTransaction((prev) => ({
          ...prev,
          [name]: value,
        }));
    };

    const handleSave = () => {
        setIsEditable(false);
        onSave(editedTransaction);
    };

    const handleEdit = () => {
        setIsEditable(true);
    };

    return (
        <dialog className="transaction-dialog" open>
          <div className="dialog-content">
            <h3>Transaction Details</h3>
            <div className="transaction-details">
              <div className="detail-item">
                <label>Category:</label>
                <input type="text" name="category" value={editedTransaction.category} disabled={!isEditable}
                  onChange={handleEditChange}
                />
              </div>
              <div className="detail-item">
                <label>Type:</label>
                <select type="text" name="type" value={editedTransaction.type} disabled={!isEditable} onChange={handleEditChange}>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
              </div>
              <div className="detail-item">
                <label>Amount:</label>
                <input type="number" name="amount" value={editedTransaction.amount} disabled={!isEditable}
                  onChange={handleEditChange}
                />
              </div>
              <div className="detail-item">
                <label>Date:</label>
                <input type="date" name="date" value={editedTransaction.date} disabled={!isEditable}
                  onChange={handleEditChange}
                />
              </div>
              <div className="detail-item">
                <label>Notes:</label>
                <input type="text" name="notes" value={editedTransaction.notes} disabled={!isEditable}
                  onChange={handleEditChange}
                />
              </div>
            </div>
            <div className="dialog-buttons">
            {isEditable ? (
                <button onClick={handleSave} className="save-transaction">Save</button>
              ) : (
                <button onClick={handleEdit} className="edit-transaction">Edit</button>
              )}
              <button onClick={onClose} className="close-dialog">Close</button>
            </div>
          </div>
        </dialog>
    );
};

export default TransactionDialog;
