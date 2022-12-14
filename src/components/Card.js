import React from "react";
import "./Card.css";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function Card(props) {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddCart = (item, item1) => {
    setCart(cart + 1);
    setTotal((prev) => prev + item);
    cartItems.push(item1);
    console.log(cartItems);
  };
  const deleteItems = (e) => {
    cartItems.splice(cartItems.indexOf(e), 1);
    setCart(cart - 1);
    setTotal((prev) => prev - e.price);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {props.type.map((item) => {
            return (
              <div className="card col-12 col-sm-12 col-md-3 ">
                <img
                  src={item.img}
                  alt="450*300"
                  width="250px"
                  height="200px"
                />
                <div className="content">
                  <h6>{item.name}</h6>
                  <p>
                    {item.unit} {item.price}
                  </p>
                  <button
                    onClick={() => handleAddCart(item.price, item)}
                    className="add"
                  >
                    {item.button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cartDetails">
        <section className="align">
          <p>Cart: {cart}</p>
          <p>Total: {total}</p>
          Cart Items:{" "}
          {cartItems.map((e) => {
            return (
              <div className="delete">
                Product: {e.name} <br />
                Amount: {e.price}
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItems(e)}
                >
                  Delete Item
                </button>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}
export default Card;
