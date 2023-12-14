import React, { useState } from "react";
import "./Navbar.css";
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop")

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-special">
                <div className="container">
                <NavLink className="navbar-brand nav-logo" to="/">
                    <img src={logo} alt="" />
                    <p>SHOPPER</p>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav mx-auto nav-menu">
                        <li className="nav-item" onClick={() => setMenu("shop")}>
                            <NavLink className="nav-link" to="/">
                                Shop
                            </NavLink>
                            {menu === 'shop' ? <hr /> : <></>}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("mens")}
                        >
                            <NavLink className="nav-link" to="/mens">
                                Men
                            </NavLink>
                            {menu === 'mens' ? <hr /> : <></>}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("womens")}>
                            <NavLink className="nav-link" to="/womens">
                                Women
                            </NavLink>
                            {menu === 'womens' ? <hr /> : <></>}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("kids")}>
                            <NavLink className="nav-link" to="/kids">
                                Kids
                            </NavLink>
                            {menu === 'kids' ? <hr /> : <></>}
                        </li>
                    </ul>
                    <div className="nav-login">
                        <NavLink className="btn btn-outline-secondary px-4" to={'/login'}>
                            Login
                        </NavLink>
                    </div>
                </div>
                <div className="nav-cart position-relative">
                    <NavLink to={'/cart'}>
                        <img src={cart_icon} alt="" className="img-fluid" width={30}/>
                        <div className="nav-cart-count">0</div>
                    </NavLink>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
