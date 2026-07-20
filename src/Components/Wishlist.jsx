import { RiFacebookFill, RiArrowDownSLine, RiInstagramLine, RiPokerHeartsLine, RiSearch2Line, RiShoppingBagLine, RiTwitterFill, RiUserLine, } from "@remixicon/react";
import { useNavigate, Link } from "react-router-dom";

export default function Wishlist({wishlist, cartCount,wishlistCount, openCart, addToCart, removeFromWishlist }) {

    const navigate = useNavigate();
    return (

        <>
            <div className="Label1">
                <p>Enjoy 20% off your entire order with the code SHOEFRESH20.</p>
                <p>Get 15% off your first purchase when you sign up for our newsletter.</p>
            </div>

            <section className="Navbar1">
                <div className="nav1-top">
                    <p>One Day Delivery Available</p>
                    <div className="icons1-1">
                        <p>Login/Register</p>
                        <RiFacebookFill size={15} />
                        <RiTwitterFill size={15} />
                        <RiInstagramLine size={15} />
                    </div>
                </div>

                <div className="nav1-bottom">

                    <Link to="/">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=250" alt="Logo" />
                    </Link>
                    <div className="page1">
                        <p>Home</p>
                        <p>Shop <RiArrowDownSLine size={12} /></p>
                        <p>Product <RiArrowDownSLine size={12} /></p>
                        <p>Blog <RiArrowDownSLine size={12} /></p>
                        <p>Pages <RiArrowDownSLine size={12} /></p>
                        <p>Buy Now</p>

                    </div>
                    <div className="icons1-2">
                        <RiSearch2Line size={17} />
                        <RiUserLine size={17} />

                        <div className="wishlist-icon" onClick={() => navigate("/wishlist")} >
                            <RiPokerHeartsLine size={20} style={{ cursor: "pointer" }} />
                            <span className="wishlist-count"> {wishlistCount}</span>
                        </div>

                        <div className="cart1-icon" onClick={() => { openCart() }}>
                            <RiShoppingBagLine size={17} />
                            <span className="cart1-count"> {cartCount} </span>
                        </div>

                    </div>
                </div>
            </section>


            <div className="wishlist-page">

                <h1>My Wishlist</h1>

                {wishlist.length === 0 ? (
                    <div className="empty-wishlist">
                        <h2>Your Wishlist is Empty</h2>
                        <p>Add your favorite products to save them for later.</p>
                    </div>
                ) : (
                    <div className="wishlist-container">

                        {wishlist.map((item) => (
                            <div key={item.name} className="wishlist-card">
                                <img src={item.image} alt={item.name} />

                                <p>${item.price}</p>
                                <h3>{item.name} </h3>

                                <div className="pro1-buttons">
                                    <button onClick={() => removeFromWishlist(item.name)} > Remove Wishlist </button>
                                    <button onClick={() =>  {addToCart(item), openCart() }}> Add To Cart </button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}

                <button className="back-btn" onClick={() => navigate("/")}> Continue Shopping </button>

            </div>





            <footer className="footer1">
                <div className="footer1-container">
                    <div className="footer1-box">
                        <h3>INFORMATION</h3>

                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Returns Policy</a></li>
                            <li><a href="/">Shipping Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="footer1-box">
                        <h3>QUICK LINKS</h3>

                        <ul>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">My Cart</a></li>
                            <li><a href="/">Size Chart</a></li>
                            <li><a href="/">Wishlist</a></li>
                            <li><a href="/">Gift Card</a></li>
                        </ul>
                    </div>

                    <div className="footer1-box center1-box">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png" alt="Logo" />

                        <p>T: + (08) 9055 0269</p>
                        <p>E: example@example.com</p>
                        <p>50 Porana Place, West Casuarinas,</p>
                        <p>Western Australia, Australia.</p>
                    </div>

                    <div className="footer1-box">
                        <h3>CATEGORIES</h3>

                        <ul>
                            <li><a href="/">Athletic Footwear</a></li>
                            <li><a href="/">Boots for Every Occasion</a></li>
                            <li><a href="/">Luxury Leather Shoes</a></li>
                            <li><a href="/">Sandals & Slides</a></li>
                            <li><a href="/">Sneakerhead's Haven</a></li>
                        </ul>
                    </div>

                    <div className="footer1-box">
                        <h3>SUPPORT</h3>

                        <ul>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">Gift Cards</a></li>
                            <li><a href="/">Sign In</a></li>
                            <li> <a href="/" className="account1-link"> My Account </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="footer1-bottom">
                    <p> Copyright © 2024 <span>Shooz.</span> All rights reserved </p>

                    <div className="payment1-icons">
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="" />
                    </div>
                </div>

            </footer>

        </>
    );
}