import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from "./Component/Back/Card/Card";
import Header from "./Component/Front/Header/Header.jsx";
import Signup from "./Component/Signup/Signup";
import Cart from "./Component/Cart/Cart";
import { useState, useEffect } from "react";
import Single from "./Component/Single/Single";
import { auth } from "./Component/firebase/firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  console.log("user", user);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const [query, setQuery] = useState("");

  const handleAddProduct = (Product) => {
    alert("run");
    console.log("pr", Product);
  };

  let total = 0;

  const getData = (data) => {
    console.log("data", data);
    setCartItems([...cartItems, { ...data }]);
  };

  cartItems?.forEach((item) => {
    total = total + Math.floor(item.price);
  });

 

  const handleRemove = (id) => {
    const fillArr = cartItems.filter((item) => item.id !== id);

    setCartItems(fillArr);
  };
  const handleChnage = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} handleChnage={handleChnage} user={user} />

        <Routes>
          <Route
            path="/"
            element={
              <Card
                handleAddProduct={handleAddProduct}
                getData={getData}
                query={query}
              />
            }
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleRemove={handleRemove}
                total={total}
              />
            }
          />
          <Route
            exact
            path="/product/:title"
            element={<Single getData={getData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
