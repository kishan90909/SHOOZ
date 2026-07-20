export default function Footer() {
    return (
        <>
            <section className="blog-section">
                {/* Blog Heading */}
                <div className="blog-heading">
                    <span>FROM THE BLOG</span>
                    <h1>Recently Our Posts</h1>
                    <p>Sit amet consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>

                {/* Blog Container */}
                <div className="blog-container">
                    {/* Left Side */}
                    <div className="blog-left">
                        <div className="big-card">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1080" alt="" />

                            <div className="fix">
                                <div className="meta">
                                    <span>Oct 28 2024</span>
                                    <span>
                                        <i className="fa-regular fa-comment"></i> 0 comments
                                    </span>
                                </div>

                                <h2>The Future Of Footwear: A Look Ahead</h2>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="blog-right">
                        <div className="small-post">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=360" alt="" />

                            <div className="post-content">
                                <div className="meta">
                                    <span>Oct 28 2024</span>
                                    <span>
                                        <i className="fa-regular fa-comment"></i> 0 comments
                                    </span>
                                </div>

                                <h3>Eco-Friendly Footwear: Sustainable Style</h3>
                            </div>
                        </div>

                        <div className="small-post">
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=360" alt="" />

                            <div className="post-content">
                                <div className="meta">
                                    <span>Oct 17 2024</span>
                                    <span> <i className="fa-regular fa-comment"></i> 0 comments </span>
                                </div>

                                <h3>The Ultimate Guide to Sneaker Care</h3>
                            </div>
                        </div>

                        <div className="small-post">
                            <img
                                src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=360"
                                alt=""
                            />

                            <div className="post-content">
                                <div className="meta">
                                    <span>Oct 17 2024</span>
                                    <span> <i className="fa-regular fa-comment"></i> 0 comments </span>
                                </div>

                                <h3>How to Style Your Favorite Sneakers</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter */}
                <section className="adv-section">
                    <div className="box"></div>

                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg?v=1731408076&width=1920" alt="" />

                    <div className="adv-data">
                        <h1>SUBSCRIBE TO OUR NEWS ARTICLES</h1>

                        <div className="input-data">
                            <input type="email" placeholder="Your email" />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </section>
            </section>


            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-box">
                        <h3>INFORMATION</h3>

                        <ul>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Returns Policy</a></li>
                            <li><a href="/">Shipping Policy</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <h3>QUICK LINKS</h3>

                        <ul>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">My Cart</a></li>
                            <li><a href="/">Size Chart</a></li>
                            <li><a href="/">Wishlist</a></li>
                            <li><a href="/">Gift Card</a></li>
                        </ul>
                    </div>

                    <div className="footer-box center-box">
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png" alt="Logo" />

                        <p>T: + (08) 9055 0269</p>
                        <p>E: example@example.com</p>
                        <p>50 Porana Place, West Casuarinas,</p>
                        <p>Western Australia, Australia.</p>
                    </div>

                    <div className="footer-box">
                        <h3>CATEGORIES</h3>

                        <ul>
                            <li><a href="/">Athletic Footwear</a></li>
                            <li><a href="/">Boots for Every Occasion</a></li>
                            <li><a href="/">Luxury Leather Shoes</a></li>
                            <li><a href="/">Sandals & Slides</a></li>
                            <li><a href="/">Sneakerhead's Haven</a></li>
                        </ul>
                    </div>

                    <div className="footer-box">
                        <h3>SUPPORT</h3>

                        <ul>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Newsletter</a></li>
                            <li><a href="/">Gift Cards</a></li>
                            <li><a href="/">Sign In</a></li>
                            <li> <a href="/" className="account-link"> My Account </a> </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p> Copyright © 2024 <span>Shooz.</span> All rights reserved </p>

                    <div className="payment-icons">
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