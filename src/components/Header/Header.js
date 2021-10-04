import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="col-md-12">
            <div className="menu-container bg-dark">
                <ul className="d-flex align-items-end justify-content-between">
                    <Link to="/home" className="items">
                        <li>Home</li>
                    </Link>
                    <Link to="/services" className="items">
                        <li>Services</li>
                    </Link>
                    <Link to="/about" className="items">
                        <li>About us</li>
                    </Link>
                    <Link to="/coaches" className="items">
                        <li>Coaches</li>
                    </Link>
                </ul>
            </div>
        </div>

    );
};

export default Header;