import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ getData }) {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setMyData(res.data));
  }, []);

  if(!myData) return <h1>Loding .....</h1>
  return (
    <div className="shopping-card">
      {myData.map((post) => {
        const { id, category, title, image, price } = post;
        return (
          <div className="card" key={id}>
            <div className="card-img">
              <img src={image} alt="" />
            </div>
            <div className="card-title">
              <h1>Category- {category}</h1>
              <Link to={`/product/${title}`}>
                <h2>{title}</h2>
              </Link>
              <h3> Price-${price}</h3>
              <button className="card-btn" onClick={() => getData(post)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
