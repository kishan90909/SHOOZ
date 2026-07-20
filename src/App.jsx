import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import BootsBooties from "./Components/Boots&Booties";
import Sale_Section from "./Components/Sale_Section";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Wishlist from "./Components/Wishlist";
import "./App.css"
import "./Styles/Navbar.css"
import "./Styles/Products.css"
import "./Styles/Boots&Booties.css"
import "./Styles/Sale_Section.css"
import "./Styles/Footer.css"
import "./Styles/Cart.css"
import "./Styles/Wishlist.css"


function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const [cart, setCart] = useState(() => {
        return JSON.parse(
            localStorage.getItem("cart")
        ) || [];
    });

    const [wishlist, setWishlist] = useState(() => {
        return JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];
    });


    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );
    }, [cart]);


    useEffect(() => {
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );
    }, [wishlist]);

    const addToCart = (product) => {

        const existing = cart.find(
            (item) => item.name === product.name
        );

        if (existing) {

            setCart(
                cart.map((item) =>
                    item.name === product.name
                        ? {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                        : item
                )
            );

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);

        }
    };

    const addToWishlist = (product) => {

        const exists = wishlist.find(
            (item) => item.name === product.name
        );

        if (!exists) {
            setWishlist([...wishlist, product]);
        }
    };


    const increaseQty = (name) => {
        setCart(
            cart.map((item) =>
                item.name === name
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQty = (name) => {
        setCart(
            cart.map((item) =>
                item.name === name && item.quantity > 1
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                    }
                    : item
            )
        );
    };

    const removeItem = (name) => {
        setCart(
            cart.filter(
                (item) => item.name !== name
            )
        );
    };

    const removeFromWishlist = (name) => {
        setWishlist(
            wishlist.filter(
                (item) => item.name !== name
            )
        );
    };

    return (
        <>
            <Routes>

                <Route
                    path="/"
                    element={
                        <>
                            <Navbar
                                cartCount={cart.length}
                                wishlistCount={wishlist.length}
                                openCart={() => setIsCartOpen(true)}
                            />

                            <Products
                                addToCart={addToCart}
                                addToWishlist={addToWishlist}
                                openCart={() => setIsCartOpen(true)}
                            />

                            <BootsBooties />
                            <Sale_Section />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/wishlist"
                    element={
                        <Wishlist
                            wishlist={wishlist}
                            cartCount={cart.length}
                            openCart={() => setIsCartOpen(true)}
                            addToCart={addToCart}
                            removeFromWishlist={removeFromWishlist}
                        />
                    }
                />

            </Routes>

            {/* Available on all pages */}
            <Cart
                cart={cart}
                isOpen={isCartOpen}
                closeCart={() => setIsCartOpen(false)}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeItem={removeItem}
            />
        </>
    )
}

export default App;