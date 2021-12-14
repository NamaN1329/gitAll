import React from "react";
import Navbar from "../Navbar/Navbar";
import BrandNew from "../BrandNew/BrandNew";
// import Owl from "../owl/Owl"
const Home = () => {
return (
    <>
    <div className="homepage-header">
        <div className="overlay"></div>
            <Navbar />
            <section className="pt-5 pb-5 homepage-search-block position-relative">
                <div className="banner-overlay"></div>
                <div className="row d-flex align-items-center py-lg-4">
                    <div className="col-lg-8 mx-auto">
                        <div className="homepage-search-title text-center">
                            <h1 className="mb-2 display-4 text-shadow text-white font-weight-normal">
                                <span className="font-weight-bold">Discover the best food & drinks in India 🇮🇳</span>
                            </h1>
                            <h5 className="mb-5 text-shadow text-white-50 font-weight-normal">Lists of top restaurants, cafes, pubs, and bars in Melbourne, based on trends</h5>

                        </div>
                        <div className="homepage-search-form">
                            <form className="form-noborder">
                                <div className="form-row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 form-group">
                                        <div className="location-dropdown">
                                            <i className="icofont-location-arrow"></i>
                                            <select className="custom-select form-control-lg">
                                            <option> Quick Searches </option>
                                            <option> Breakfast </option>
                                            <option> Lunch </option>
                                            <option> Dinner </option>
                                            <option> Cafés </option>
                                            <option> Delivery </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-12 form-group">
                                        <input type="text" placeholder="Enter your delivery location" className="form-control form-control-lg" />
                                        <a className="locate-me" href="#"><i className="icofont-ui-pointer"></i> Locate Me</a>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-12 form-group">
                                        <a href="listing.html" className="btn btn-primary btn-block btn-lg btn-gradient">Search</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <h6 className="mt-4 text-shadow text-white font-weight-normal">E.g. Beverages, Pizzas, Chinese, Bakery, Indian...</h6>
                        <div className="owl-carousel owl-carousel-category owl-theme owl-loaded owl-drag">
                            <div className="owl-stage-outer">

                            {/* owl carousel */}

                                <div className="owl-stage" style={{ transform : "translate3d(-1368px, 0px, 0px)", transition : "all 1s ease 0s", width : "2282px" }}>
                                    <div className="owl-item cloned" style={{ width : "91.25px" }}>
                                        <div className="item" >
                                            <div className="osahan-category-item">
                                                <a href="#">
                                                    <img className="img-fluid" src="../../images/list/2.png" alt="" />
                                                    <h6>Pizza</h6>
                                                    <p>120</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
            
            {/* <div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/3.png" alt="" />
            <h6>Healthy</h6>
            <p>130</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/4.png" alt="" />
            <h6>Vegetarian</h6>
            <p>120</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/5.png" alt="" />
            <h6>Chinese</h6>
            <p>111</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/6.png" alt="" />
            <h6>Hamburgers</h6>
            <p>958</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/7.png" alt="" />
            <h6>Dessert</h6>
            <p>56</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/8.png" alt="" />
            <h6>Chicken</h6>
            <p>40</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/9.png" alt="" />
            <h6>Indian</h6>
            <p>156</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/1.png" alt="" />
            <h6>American</h6>
            <p>156</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/2.png" alt="" />
            <h6>Pizza</h6>
            <p>120</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/3.png" alt="" />
            <h6>Healthy</h6>
            <p>130</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/4.png" alt="" />
            <h6>Vegetarian</h6>
            <p>120</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/5.png" alt="" />
            <h6>Chinese</h6>
            <p>111</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/6.png" alt="" />
            <h6>Hamburgers</h6>
            <p>958</p>
            </a>
            </div>
            </div></div><div className="owl-item" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/7.png" alt="" />
            <h6>Dessert</h6>
            <p>56</p>
            </a>
            </div>
            </div></div><div className="owl-item active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/8.png" alt="" />
            <h6>Chicken</h6>
            <p>40</p>
            </a>
            </div>
            </div></div><div className="owl-item active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/9.png" alt="" />
            <h6>Indian</h6>
            <p>156</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/1.png" alt="" />
            <h6>American</h6>
            <p>156</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/2.png" alt="" />
            <h6>Pizza</h6>
            <p>120</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/3.png" alt="" />
            <h6>Healthy</h6>
            <p>130</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/4.png" alt="" />
            <h6>Vegetarian</h6>
            <p>120</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/5.png" alt="" />
            <h6>Chinese</h6>
            <p>111</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned active" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/6.png" alt="" />
            <h6>Hamburgers</h6>
            <p>958</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/7.png" alt="" />
            <h6>Dessert</h6>
            <p>56</p>
            </a>
            </div>
            </div></div><div className="owl-item cloned" style={{ width : "91.25px" }}><div className="item">
            <div className="osahan-category-item">
            <a href="#">
            <img className="img-fluid" src="../../images/list/8.png" alt="" />
            <h6>Chicken</h6>
            <p>40</p>
            </a>
            </div>
            </div>
            </div>
 */}
                                {/* end owl carousel */}

                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section className="section pt-5 pb-5 bg-white homepage-add-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="products-box">
                            <a href="listing.html">
                                <img alt="" src="https://askbootstrap.com/preview/osahan-eat/theme-2/img/pro1.jpg" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="products-box">
                            <a href="listing.html">
                                <img alt="" src="https://askbootstrap.com/preview/osahan-eat/theme-2/img/pro2.jpg" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="products-box">
                            <a href="listing.html">
                                <img alt="" src="https://askbootstrap.com/preview/osahan-eat/theme-2/img/pro3.jpg" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="products-box">
                            <a href="listing.html">
                                <img alt="" src="https://askbootstrap.com/preview/osahan-eat/theme-2/img/pro4.jpg" className="img-fluid rounded" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <Owl /> */}
        {/* <Popular Brand /> */}
        <BrandNew />
        <section className="footer-bottom-search pt-5 pb-5 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <p className="text-black">POPULAR COUNTRIES</p>
                        <div className="search-links">
                            <a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a> | <a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a><a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a> | <a href="#">Australia</a> | <a href="#">Brasil</a> | <a href="#">Canada</a> | <a href="#">Chile</a> | <a href="#">Czech Republic</a> | <a href="#">India</a> | <a href="#">Indonesia</a> | <a href="#">Ireland</a> | <a href="#">New Zealand</a> | <a href="#">United Kingdom</a> | <a href="#">Turkey</a> | <a href="#">Philippines</a> | <a href="#">Sri Lanka</a>
                        </div>
                        <p className="mt-4 text-black">POPULAR FOOD</p>
                        <div className="search-links">
                            <a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a> | <a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a><a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a> | <a href="#">Fast Food</a> | <a href="#">Chinese</a> | <a href="#">Street Food</a> | <a href="#">Continental</a> | <a href="#">Mithai</a> | <a href="#">Cafe</a> | <a href="#">South Indian</a> | <a href="#">Punjabi Food</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default Home;