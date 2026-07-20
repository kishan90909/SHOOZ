import { RiFacebookFill, RiArrowDownSLine, RiInstagramLine, RiPokerHeartsLine, RiSearch2Line, RiShoppingBagLine, RiTwitterFill, RiUserLine, } from "@remixicon/react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ cartCount, openCart, wishlistCount }) {

    const navigate = useNavigate();

    return (
        <>
            <div className="Label">
                <p>Enjoy 20% off your entire order with the code SHOEFRESH20.</p>
                <p>Get 15% off your first purchase when you sign up for our newsletter.</p>
            </div>

            <section className="Navbar">
                <div className="nav-top">
                    <p>One Day Delivery Available</p>
                    <div className="icons-1">
                        <p>Login/Register</p>
                        <RiFacebookFill size={15} />
                        <RiTwitterFill size={15} />
                        <RiInstagramLine size={15} />
                    </div>
                </div>

                <div className="nav-bottom">

                    <Link to="/">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" alt="Logo" />
                    </Link>
                    <nav className="page">
                        <p>Home</p>
                        <p>Shop <RiArrowDownSLine size={12} /></p>
                        <p>Product <RiArrowDownSLine size={12} /></p>
                        <p>Blog <RiArrowDownSLine size={12} /></p>
                        <p>Pages <RiArrowDownSLine size={12} /></p>
                        <p>Buy Now</p>

                    </nav>
                    <div className="icons-2">
                        <RiSearch2Line size={17} />
                        <RiUserLine size={17} />

                        <div className="wishlist-icon" onClick={() => navigate("/wishlist")} >
                            <RiPokerHeartsLine size={20}style={{ cursor: "pointer" }} />
                            <span className="wishlist-count"> {wishlistCount}</span>
                        </div>

                        <div className="cart-icon" onClick={() => { openCart() }}>
                            <RiShoppingBagLine size={17} />
                            <span className="cart-count"> {cartCount} </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Hero-section */}
            <section className="hero-section">
                <div className="oevrplay"></div>
                <div className="hero-data">
                    <p>COMFORT MEETS FACTION</p>
                    <h1>Discover shoes that look <br />  great and feel even better.</h1>
                    <h4>Our collection features comfortable and stylish footwear <br />designed to keep your feet happy all day long.</h4>
                    <button>SHOP NOW  →</button>
                </div>
            </section>

            {/* banner section */}
            <section className="banner-section">
                <div className="banner-container">
                    <div className="banner-box">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920" alt="" />
                        <div className="banner-data">
                            <p>TRADING</p>
                            <h3>Men <br /> Collection</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                    <div className="banner-box">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920" alt="" />
                        <div className="banner-data">
                            <p>LATEST</p>
                            <h3>Women <br /> Collection</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                    <div className="banner-box">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920" alt="" />
                        <div className="banner-data">
                            <p>COMFORT</p>
                            <h3>Kid <br /> Collection</h3>
                            <button>SHOP NOW</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}