import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const FilterTransactions = () => {
    
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        type: '',
        date: '',
        notes: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleApplyFilter = (filterType) => {
        // handle according to the filtered type
        console.log(`Applying filter for: ${filterType}`, filters);
    };

    return (
        <div className="filter-container">
            <h3>Filter Transactions</h3>
            <div className="filter-groups">
                <div className="price">
                    <div className="filter-group">
                        <label htmlFor="min-price">Min Price:</label>
                        <inpuyt type="number" id="min-price" name="minPrice" value={filters.minPrice} placeholder="0"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="filter-group">
                        <label htmlFor="max-price">Max Price:</label>
                        <input type="number" id="max-price" name="maxPrice" value={filters.maxPrice} placeholder="1000" 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="apply">
                        <button id="apply-filter-price" className="bg-green"
                            onClick={() => handleApplyFilter("price")}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                <div className="filter-group">
                    <label htmlFor="type-filter">Type:</label>
                    <select id="type-filter" name="type" value={filters.type} 
                        onChange={handleChange}
                    >
                        <option value="">All</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                    <div className="apply">
                        <button id="apply-filter-type" className="bg-green"
                            onClick={() => handleApplyFilter("type")}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                <div className="filter-group">
                    <label htmlFor="date-filter">Date:</label>
                    <input type="date" id="date-filter" name="date" value={filters.date}
                        onChange={handleChange}
                    />
                    <div className="apply">
                        <button id="apply-filter-date" className="bg-green"
                            onClick={() => handleApplyFilter("date")}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                <div className="filter-group">
                    <label htmlFor="notes-filter">Notes:</label>
                    <input type="text" id="notes-filter" name="notes" value={filters.notes} placeholder="Search notes..."
                        onChange={handleChange}
                    />
                    <div className="apply">
                        <button id="apply-filter-notes" className="bg-green"
                            onClick={() => handleApplyFilter("notes")}
                        >
                            Apply Filter
                        </button>
                    </div>
                </div>

                <div className="apply">
                    <button id="apply-filter-all" className="bg-purple"
                        onClick={() => handleApplyFilter("all")}
                    >
                        Apply All Filter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterTransactions;