import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Category =  ({ colorClass, icon, label }) => {
    return (
        <div className="category">
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
                className={`lucide ${colorClass}`}
            >
                {icon}
            </svg>
            <p>{label}</p>
        </div>
    );
};

const Expenses_categories_container = () => {

    const categories = [
        {
            label: "food",
            colorClass: "lucide-soup txt-orange",
            icon: (
                <>
                    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
                    <path d="M7 21h10" />
                    <path d="M19.5 12 22 6" />
                    <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
                    <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
                    <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
                </>
            ),
        },
        {
            label: "travel",
            colorClass: "lucide-car txt-purple",
            icon: (
                <>
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                </>
            ),
        },
        {
            label: "rent",
            colorClass: "lucide-house txt-green",
            icon: (
                <>
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </>
            ),
        },
        {
            label: "shopping",
            colorClass: "lucide-shopping-bag txt-pink",
            icon: (
                <>
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </>
            ),
        },
        {
            label: "medicine",
            colorClass: "lucide-pill txt-pink-purple",
            icon: (
                <>
                    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                    <path d="m8.5 8.5 7 7" />
                </>
            ),
        },
        {
            label: "+ Add new",
            colorClass: "",
            icon: null, // No icon for "Add new"
        },
    ];

    return (
        <div className="expenses-categories-container">
            <h3>Expenses</h3>
            <div className="expenses-categories">
                {categories.map((category, index) => (
                        <Category
                            key={index}
                            label={category.label}
                            colorClass={category.colorClass}
                            icon={category.icon}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Expenses_categories_container;