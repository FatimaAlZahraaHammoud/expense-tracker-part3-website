import React, {useState} from "react";
import "../styles/style.css";
import "../styles/base/utilities.css";
import "../styles/base/colors.css";
import "../styles/base/base.css";
import "../styles/register-login.css";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Navbar = () =>{
    return(
        <nav>
            <a><img src="" alt="" className="logo" /></a>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#transactions-container"><li>Transactions</li></a>
                <a href="#"><li>Reports</li></a>
                <button>Contact</button>
            </ul>
        </nav>
    );
}

export default Navbar;