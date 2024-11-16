import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const FilterTransactions = ({ transactions, setFilteredTransactions }) => {
    
    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        type: "",
        date: "",
        notes: "",
    });

    const clearFilters = () => {
        setFilters({
            minPrice: "",
            maxPrice: "",
            type: "",
            date: "",
            notes: "",
        });
        setFilteredTransactions(transactions);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleApplyFilter = () => {
        let filtered = [...transactions]; 
    
        // Apply filters if they exist
        if (filters.minPrice !== "") {
          filtered = filtered.filter(
            (transaction) => parseFloat(transaction.amount) >= parseFloat(filters.minPrice)
          );
        }
    
        if (filters.maxPrice !== "") {
          filtered = filtered.filter(
            (transaction) => parseFloat(transaction.amount) <= parseFloat(filters.maxPrice)
          );
        }
    
        if (filters.type !== "") {
          filtered = filtered.filter((transaction) => transaction.type === filters.type);
        }
    
        if (filters.date !== "") {
          filtered = filtered.filter((transaction) => transaction.date === filters.date);
        }
    
        if (filters.notes !== "") {
          filtered = filtered.filter((transaction) =>
            transaction.notes.toLowerCase().includes(filters.notes.toLowerCase())
          );
        }
    
        setFilteredTransactions(filtered);
    };

    return (
        <div className="filter-container">
            <h3>Filter Transactions</h3>
            <div className="filter-groups">
                <div className="filter-group">
                    <label htmlFor="min-price">Min Price:</label>
                    <input
                        type="number"
                        id="min-price"
                        name="minPrice"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={handleChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="max-price">Max Price:</label>
                    <input
                        type="number"
                        id="max-price"
                        name="maxPrice"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={handleChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="type-filter">Type:</label>
                    <select
                        id="type-filter"
                        name="type"
                        value={filters.type}
                        onChange={handleChange}
                    >
                        <option value="">All</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label htmlFor="date-filter">Date:</label>
                    <input
                        type="date"
                        id="date-filter"
                        name="date"
                        value={filters.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="filter-group">
                    <label htmlFor="notes-filter">Notes:</label>
                    <input
                        type="text"
                        id="notes-filter"
                        name="notes"
                        value={filters.notes}
                        placeholder="Search notes..."
                        onChange={handleChange}
                    />
                </div>

                <div className="filter-actions">
                    <button className="bg-purple clear-filter" onClick={clearFilters}>
                        Clear Filters
                    </button>
                    <button className="bg-green apply-filter" onClick={handleApplyFilter}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterTransactions;