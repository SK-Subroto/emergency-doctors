import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="header-container text-center">
                <h1>Emergency Doctors <i className="fas fa-user-md"></i></h1>
                <p className="fs-5">This is the list of all highly qualified doctors for support emergency situation</p>
                <h4>Total Budget: 1.2M</h4>
            </div>
        </div>
    );
};

export default Header;