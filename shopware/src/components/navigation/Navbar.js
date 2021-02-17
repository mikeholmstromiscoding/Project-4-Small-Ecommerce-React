import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from '../shoppingcart/ShoppingCart'

const Navbar = () => {

    const shoppingCartItemCount = useSelector(state => state.cart.shoppingCartItemCount)
    
    return (

        //<-- Navbar -->

        <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color fixed-top scrolling-navbar">
            <div className="container">
                <Link to="/" className="navbar-brand"><i className="fab fa-shopware"></i> Shopware.se</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-right " id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav ml-auto nav-flex-icons float-right">
                        {/* ShoppingCart */}
                        <li className="nav-item dropdown">
                            <a href="/#" className="nav-link mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {shoppingCartItemCount}  <i className="fas fa-shopping-cart"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                                {/*<app-shopping-cart></app-shopping-cart>*/}
                                <Cart />
                            </div>
                        </li>

                        {/* UserSettings */}
                        <li className="nav-item dropdown">
                            <a href="/#" className="nav-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right z-depth-2">

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
