import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import {BiLogInCircle} from "react-icons/bi"
import "./Header.css";
import Model from "../../Model/Model";
import { useState } from "react";
import Signup from "../../Signup/Signup";
import filpkart from "../../Images/flipkart.png";
import plus from "../../Images/plus.png";
import { useEffect } from "react";
import Login from "../../Signup/Login";
// import Login from "../../Signup/Login";
import { auth } from "../../firebase/firebase";

const Header = ({ cartItems, handleChnage, user }) => {
  const [open, setOpen] = useState(false);
 
  const [login, setLogin] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    
      openModal();
    
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <div className="header-shopping-logo">
            <Link to="/" className="logo">
              <div className="logo-filpkart">
                <img src={filpkart} alt="" />
              </div>
              <div className="logo-cart">
                <span>
                  Explore plus
                  <img src={plus} alt="" className="img-plus" />
                </span>
              </div>
            </Link>
          </div>
          <div className="header-input">
            <input
              type="text"
              placeholder="Search for products, brands and more"
              onChange={handleChnage}
            />
            <AiOutlineSearch className="header-icon" />
          </div>
        </div>
        <div className="header-links">
          <ul>
            <li>
              <Link to="/" className="Home-nav">Home</Link>
            </li>
          </ul>

          {user !== null ? (
            <ul>
              <li>
                <button
                  onClick={() => {
                    auth.signOut();
                  }}
                  className="logout-btn"
                >
                  <BiLogInCircle/>
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li
                style={{ cursor: "pointer", marginRight: 20 }}
                onClick={() => setOpen(!open)}
              >
                Signup
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => setLogin(!login)}
              >
                login
              </li>
            </ul>
          )}

          <ul>
            <li>
              <Link to="/cart" className="cart-box">
                < HiShoppingCart />
                Cart
                <span className="cart-length">
                  {cartItems?.length > 0 ? cartItems?.length : "0"}{" "}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {open && (
        <Model setOpen={setOpen}>
          <Signup />
        </Model>
      )}

      {login && (
        <Model setOpen={setLogin}>
          <Login setOpen={setLogin} />
        </Model>
      )}
    </>
  );
};

export default Header;
