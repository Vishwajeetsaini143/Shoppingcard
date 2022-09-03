import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./single.css";

const Single = () => {
  const [shopping, setShopping] = useState([]);
  const { title } = useParams();

  const getSingleproduct = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const fillArr = res.data.filter((shopping) => shopping.title === title);
      console.log(fillArr[fillArr.title]);
      setShopping(fillArr[0]);
    });
  };
  useEffect(() => {
    getSingleproduct();
  }, []);
  return (
    <div className="single-card">
      <div className="single-card-img">
        <img src={shopping.image} alt="" />
      </div>
      <div className="single-card-title">
        <h1>Category- {shopping.category}</h1>
        <h1>{shopping.title}</h1>
        <h3> Price-${shopping.price}</h3>
        <button className="single-card-btn1">Add to Cart</button>
        <button className="single-card-btn2">Buy Now</button>
      </div>
    </div>
  );
};

export default Single;
