function Cart({
    cart = [],
    isOpen,
    closeCart,
    increaseQty,
    decreaseQty,
    removeItem,
}) {

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <div className={`overlay ${isOpen ? "active" : ""}`} onClick={closeCart} />
            
            <div className={`cart-drawer ${isOpen ? "active" : ""}`}>
                <div className="cart-header">
                    <h2>Cart ({cart.length})</h2>
                    <button onClick={closeCart}> ✕ </button>
                </div>

                <div className="cart-body">

                    {cart.map((item) => (
                        <div className="cart-item" key={item.name}>
                            <img src={item.image}   alt={item.name} />

                            <div className="cart-info">
                                <h4>{item.name}</h4>

                                <p> ${item.price} </p>

                                <div className="qty-box">

                                    <button onClick={() => decreaseQty(item.name)} >
                                        -
                                    </button>

                                    <span> {item.quantity} </span>

                                    <button
                                        onClick={() =>
                                            increaseQty(
                                                item.name
                                            )
                                        }
                                    >
                                        +
                                    </button>

                                </div>
                            </div>

                            <button
                                className="remove"
                                onClick={() =>
                                    removeItem(item.name)
                                }
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-footer">
                    <h3>
                        Total : $
                        {total.toFixed(2)}
                    </h3>

                    <button className="checkout-btn">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;