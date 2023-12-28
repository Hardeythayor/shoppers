import React, { useState } from "react";
import "./Navbar.css";
import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop")

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-special">
                <div className="container">
                <NavLink className="navbar-brand nav-logo" to="/">
                    <img src={logo} alt="" />
                    <p>ROLEXCOSPORT</p>
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
                        <li className="nav-item" onClick={() => setMenu("golf")}
                        >
                            <NavLink className="nav-link" to="/golf">
                                Golf
                            </NavLink>
                            {menu === 'golf' ? <hr /> : <></>}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("soccer")}>
                            <NavLink className="nav-link" to="/soccer">
                                Soccer / Football
                            </NavLink>
                            {menu === 'soccer' ? <hr /> : <></>}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("american_football")}>
                            <NavLink className="nav-link" to="/american-football">
                                American Football
                            </NavLink>
                            {menu === 'american_football' ? <hr /> : <></>}
                        </li>
                        <li className="nav-item" onClick={() => setMenu("cricket")}>
                            <NavLink className="nav-link" to="/cricket">
                                Cricket
                            </NavLink>
                            {menu === 'cricket' ? <hr /> : <></>}
                        </li>
                    </ul>
                    {/* <div className="nav-login">
                        <NavLink className="btn btn-outline-secondary px-4" to={'/login'}>
                            Login
                        </NavLink>
                    </div> */}
                </div>
                {/* <div className="nav-cart position-relative">
                    <NavLink to={'/cart'}>
                        <img src={cart_icon} alt="" className="img-fluid" width={30}/>
                        <div className="nav-cart-count">0</div>
                    </NavLink>
                </div> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
