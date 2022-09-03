import {BsShieldFillCheck} from  'react-icons/bs'

import { useState } from "react";

import "./cart.css";
const Cart = ({ cartItems ,handleRemove,total}) => {
const [quentity, setQuentity] = useState(1);
const handelDecrement = () => {
  if (quentity > 1) {
    setQuentity((prevCount) => prevCount - 1 );

  }
};
const handelIncrement = () => {
  if (quentity<10) {
    console.log('qt',quentity)
    setQuentity((prevCount) => prevCount + 1);
  }
};

return (
  <div className="cart-items">
    <div className="cart-header">From Saved Addresses</div>
    {cartItems.length === 0 && (
      <div className="cart-empty">No items are added</div>
    )}
    <div className="cart-wraper">
      <div className="cart">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-list">
            <div className="cart-img">
              
              <img src={item.image} alt="" />
              <div className="cart-btns">
                <button type="button" onClick={handelDecrement} className="cart-decrement-btn">-</button>

                <div className="cart-input-text">{quentity>0?quentity:"1"}</div>
                <button type="button" onClick={handelIncrement} className="cart-increment-btn">+</button>
              </div>
            </div>

            <div className="cart-title">
              <h1>Category- {item.category}</h1>
              <h1>{item.title}</h1>
              <h3> Price-${item.price}</h3>
              <button className="cart-btn">SAVE FOR LATER</button>
              <button className="cart-btn" onClick={()=>handleRemove(item?.id)}>REMOVE</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-price-details"> 
      <h1>PRICE DETAILS</h1>
      <div>
        <div className="cart-price">
       <div> <span> Price</span></div>
       <div> <span>${total && total}</span></div>
        </div>
       <div className="cart-delivery">
       <div><span>Delivery Charges </span></div>
       <div><span>FREE</span></div>
       </div>
       <div className="cart-total">
        <div><span>Total Amount</span></div>
        <div><span>${total && total}</span></div>
       </div>
      <div className="cart-heading6">
      <h5>Thanks for Orderd</h5></div> 
      </div>

      <div className="cart-haeding5">
        <div><BsShieldFillCheck/></div>
     <div> <h5>Safe and Secure Payments.Easy returns.100%<br/> Authentic products.</h5></div>
</div>
      
      </div>
    </div>
  </div>
);
        }
export default Cart;
