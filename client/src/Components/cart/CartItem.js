import React, { useState } from "react";
import "./CartItem.css";
import { removeFromCart } from "../../redux/actions/cartActions";
import {useDispatch} from 'react-redux';


function CartItem({ item }) {
  const [button, setbutton] = useState(item.quantity);
  const minusChangeHandler = () => {
    setbutton(button - 1);
  };
  const addChangeHandler = () => {
    setbutton(button + 1);
  };
  const dispatch=useDispatch()
  const deleteChangeHandler=(id)=>{
    dispatch(removeFromCart(id))
  }
  return (
    <>
      <div className="cart__item mx-2">
        <div className="left__cart mx-3">
          <div>
            <img src={item.url} className="cart__img" />
            <div className="btn__item">
              <button className="minusbtn" onClick={minusChangeHandler}>
                -
              </button>
              <p style={{ display: "flex", marginTop: "10px" }}>
                {item.quantity}
              </p>
              <button
                className="plusbtn"
                style={{ marginTop: "-5px" }}
                onClick={addChangeHandler}
              >
                +
              </button>
            </div>
          </div>
          <div className="cartitem__detail my-4 mx-3">
            <div className="cartitem__title">
              <h5>{item.title.longTitle}</h5>
              <small>In stock</small>
              <small>Eligible for FREE Shipping</small>
              <div className="cartitem__footer col-4">
                <button
                  style={{ padding: "0", border: "none", background: "none" }}
               onClick={()=>deleteChangeHandler(item.id)} >
                  <small>Delete</small>
                </button>
                <button style={{ padding: "0", border: "none", background: "none" }}>
                  <small> Save for later</small>
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>₹{item.price.cost}</p>
            <del>₹{item.price.mrp}</del>
            <p>-{item.price.discount}</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default CartItem;
