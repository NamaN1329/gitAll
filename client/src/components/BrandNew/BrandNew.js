import React from "react";
const BrandNew = () => {
    return (
        <>
        <section className="section pt-5 pb-5 bg-white becomemember-section border-bottom">
            <div className="container">
                <div className="section-header text-center white-text">
                    <h2>Become a Member</h2>
                    <p>Lorem Ipsum is simply dummy text of</p>
                    <span className="line"></span>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <a href="register.html" className="btn btn-success btn-lg">
                        Create an Account <i className="fa fa-chevron-circle-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-5 pb-5 text-center bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h5 className="m-0">Operate food store or restaurants? <a href="login.html">Work With Us</a></h5>
                    </div>
                </div>
            </div>
        </section>
        <section className="footer pt-5 pb-5">
            <div className="container">
                <div className="row">
                <div className="col-md-4 col-12 col-sm-12">
                <h6 className="mb-3">Subscribe to our Newsletter</h6>
                <form className="newsletter-form mb-1">
                <div className="input-group">
                <input type="text" placeholder="Please enter your email" className="form-control" />
                <div className="input-group-append">
                <button type="button" className="btn btn-primary">
                Subscribe
                </button>
                </div>
                </div>
                </form>
                <p><a className="text-info" href="register.html">Register now</a> to get updates on <a href="offers.html">Offers and Coupons</a></p>
                <div className="app">
                <p className="mb-2">DOWNLOAD APP</p>
                <a href="#">
                <img className="img-fluid" src="https://askbootstrap.com/preview/osahan-eat/theme-2/img/google.png" />
                </a>
                <a href="#">
                <img className="img-fluid" src="https://askbootstrap.com/preview/osahan-eat/theme-2/img/apple.png" />
                </a>
                </div>
                </div>
                <div className="col-md-1 col-sm-6 mobile-none">
                </div>
                <div className="col-md-2 col-6 col-sm-4">
                <h6 className="mb-3">About OE</h6>
                <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Culture</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                </ul>
                </div>
                <div className="col-md-2 col-6 col-sm-4">
                <h6 className="mb-3">For Foodies</h6>
                <ul>
                <li><a href="#">Community</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Blogger Help</a></li>
                <li><a href="#">Verified Users</a></li>
                <li><a href="#">Code of Conduct</a></li>
                </ul>
                </div>
                <div className="col-md-2 m-none col-4 col-sm-4">
                <h6 className="mb-3">For Restaurants</h6>
                <ul>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Add a Restaurant</a></li>
                <li><a href="#">Claim your Listing</a></li>
                <li><a href="#">For Businesses</a></li>
                <li><a href="#">Owner Guidelines</a></li>
                </ul>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default BrandNew;