import React from "react";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark osahan-nav">
            <div className="container">
                <a className="navbar-brand" href="/"><img alt="logo" src="../../images/favicon.png" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="offers.html"><i className="icofont-sale-discount"></i> Offers <span className="badge badge-warning">New</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Restaurants
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow-sm border-0">
                                <a className="dropdown-item" href="listing.html">Listing</a>
                                <a className="dropdown-item" href="detail.html">Detail + Cart</a>
                                <a className="dropdown-item" href="checkout.html">Checkout</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow-sm border-0">
                                <a className="dropdown-item" href="track-order.html">Track Order</a>
                                <a className="dropdown-item" href="invoice.html">Invoice</a>
                                <a className="dropdown-item" href="/login">Login</a>
                                <a className="dropdown-item" href="/signup">Register</a>
                                <a className="dropdown-item" href="404.html">404</a>
                                <a className="dropdown-item" href="extra.html">Extra :)</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img alt="Generic placeholder image" src="../../images/user/4.png" className="nav-osahan-pic rounded-pill" /> My Account
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow-sm border-0">
                                <a className="dropdown-item" href="orders.html#orders"><i className="icofont-food-cart"></i> Orders</a>
                                <a className="dropdown-item" href="orders.html#offers"><i className="icofont-sale-discount"></i> Offers</a>
                                <a className="dropdown-item" href="orders.html#favourites"><i className="icofont-heart"></i> Favourites</a>
                                <a className="dropdown-item" href="orders.html#payments"><i className="icofont-credit-card"></i> Payments</a>
                                <a className="dropdown-item" href="orders.html#addresses"><i className="icofont-location-pin"></i> Addresses</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown dropdown-cart">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-shopping-basket"></i> Cart
                                <span className="badge badge-success">5</span>
                            </a>
                            <div className="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
                                <div className="dropdown-cart-top-header p-4">
                                    <img className="img-fluid mr-3" alt="osahan" src="../../images/cart.jpg" />
                                    <h6 className="mb-0">Gus's World Famous Chicken</h6>
                                    <p className="text-secondary mb-0">310 S Front St, Memphis, USA</p>
                                    <small><a className="text-primary font-weight-bold" href="#">View Full Menu</a></small>
                                </div>
                                <div className="dropdown-cart-top-body border-top p-4">
                                    <p className="mb-2"><i className="icofont-ui-press text-danger food-item"></i> Chicken Tikka Sub 12" (30 cm) x 1 <span className="float-right text-secondary">$314</span></p>
                                    <p className="mb-2"><i className="icofont-ui-press text-success food-item"></i> Corn & Peas Salad x 1 <span className="float-right text-secondary">$209</span></p>
                                    <p className="mb-2"><i className="icofont-ui-press text-success food-item"></i> Veg Seekh Sub 6" (15 cm) x 1 <span className="float-right text-secondary">$133</span></p>
                                    <p className="mb-2"><i className="icofont-ui-press text-danger food-item"></i> Chicken Tikka Sub 12" (30 cm) x 1 <span className="float-right text-secondary">$314</span></p>
                                    <p className="mb-2"><i className="icofont-ui-press text-danger food-item"></i> Corn & Peas Salad x 1 <span className="float-right text-secondary">$209</span></p>
                                </div>
                                <div className="dropdown-cart-top-footer border-top p-4">
                                    <p className="mb-0 font-weight-bold text-secondary">Sub Total <span className="float-right text-dark">$499</span></p>
                                    <small className="text-info">Extra charges may apply</small>
                                </div>
                                <div className="dropdown-cart-top-footer border-top p-2">
                                    <a className="btn btn-success btn-block btn-lg" href="checkout.html"> Checkout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar