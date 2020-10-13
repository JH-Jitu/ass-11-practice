import React from 'react';
import './Navbar.css';
import menu from '../../../../images/menu.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container mb-2">
            <nav className="navbar navbar-expand-lg  nav-font">
                <button className="navbar-toggler bgMenu w-40 btn-dark p-2 pl-3 pr-3 ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <img style={{ width: "25px" }} src={menu} alt="" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark" href="#">Home <span className="sr-only">(current)</span></p>
                        </li></Link>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Our Team</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#">Contact Us</a>
                        </li>
                        <button style={{backgroundColor: "#111430"}} className="nav-item btn px-4 h-100 btnLogin">
                            <a className="nav-link text-light" href="#">Login</a>
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;