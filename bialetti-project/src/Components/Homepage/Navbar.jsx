

import React from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaHeart, FaBars } from 'react-icons/fa';
import "./Navbar.css";
import { Button, useDisclosure } from '@chakra-ui/react';
import Signup from "../LoginSignup/Signup"
import { Link } from "react-router-dom"


const Navbar = () => {
    const {
        isOpen: isSignupOpen,
        onOpen: onSignupOpen,
        onClose: onSignupClose,
    } = useDisclosure();

    return (
        <nav className="navbar">
            <div className="top-bar">
                <img src='https://www.bialetti.com/static/version1686550349/frontend/bialetti/bialetti_italia/en_US/icons/Truck.svg' />
                <div className="free-shipping"> <p> Free shipping for orders over 59,90€ </p></div>
            </div>
            <div className="language">
                <span>EN</span>----<span>IT</span>
            </div>
            <div className="logo">
                <Link to='/'>
                    <img src="https://www.bialetti.com/media/logo/default/5-layers_3x.png" alt="Logo" />
                </Link>

            </div>
            <div className="icons">
                <a href="">
                    <FaSearch />
                </a>
                <a href="">
                    <FaHeart />

                </a>

                <a href="" onClick={onSignupOpen} >
                    <FaUser />
                </a>
                <Link to="/cart">
                    <FaShoppingBag />
                </Link>

            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to={'/product'}> OFFEE ROASTING BIALETTI</Link>
                    </li>
                    <li> <Link to={'/product'}>PRODUCTS</Link>

                    </li>
                    <li><
                        Link to={'/product'}>MOKA EXPRESS</Link>
                    </li>
                    <li>
                        <Link to={`/product`}>NEWS</Link>


                    </li>
                    <li>
                        <Link to={`/product`}>INSPIRATION</Link>

                    </li>
                    <li>
                        <Link to={`/product`}> STORES</Link>
                    </li>
                </ul>
            </div>
            <Signup
                isSignupOpen={isSignupOpen}
                onSignupOpen={onSignupOpen}
                onSignupClose={onSignupClose}
            />
        </nav>

    );
}

export default Navbar;
