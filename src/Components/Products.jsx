import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/productsData";
import featuredProducts from "../data/featuredProducts";
import bestSellerProducts from "../data/bestSellerProducts";
import newArrivalProducts from "../data/newArrivalProducts";

export default function Products({ addToCart, addToWishlist ,openCart}) {

  const [products, setProducts] = useState(productsData);
  const navigate = useNavigate();

  return (
    <>
      <section className="product-section">
        <div className="product-header">

          <p>The latest trends in athletic footwear</p>
          <h1>Sneakers & Kicks</h1>
          
          <div className="buttons">
            <button onClick={() => setProducts(featuredProducts)}> FEATURED </button>
            <button onClick={() => setProducts(newArrivalProducts)}> NEW ARRIVALS </button>
            <button onClick={() => setProducts(bestSellerProducts)} >BEST SELLER </button>
          </div>

        </div>
      </section>

      <section className="product-container">

        {products.map((product) => (

          <div className="product-box" key={product.id}>

            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-data">

              <span>$ {product.price}</span>

              <p>{product.name}</p>

              <div className="pro-buttons">
                <button onClick={() => {addToCart(product),openCart()}}> Add To Cart</button>
                <button onClick={() => addToWishlist(product)}> Add To Wishlist </button>
              </div>
            </div>
          </div>
        ))}

      </section>

      {/* Banner */}

      <section className="banner1-box">
        <div className="banner1-data">
          <p>Comfort Meets Fashion</p>
          <h1> Discover shoes that look great <br /> and feel even better </h1>
          <h4> Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.</h4>
          <button>SHOP NOW →</button>
        </div>
      </section>

      <div className="Label-1">
        <p> Enjoy 20% off your entire order with the code SHOEFRESH20.</p>
        <p> Get 15% off your first purchase when you sign up for our newsletter.</p>
      </div>
    </>
  );
}