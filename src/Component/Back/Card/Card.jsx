import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./card.css";
import { Link } from "react-router-dom";
import Carouselitem from "../../Carousel/Carouselitem";
import Datafilter from "../Datafilter/Datafilter";

function Card({ getData, query }) {
  const [myData, setMyData] = useState([]);
  const [data,setData]=useState([])

  // console.log("query", query);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) =>
      {
        setMyData(res.data);
        setData(res.data)

      }
      )

      
      ;
  }, []);

  const handleFilter = (cat) => {
    console.log('cat')
    const fillproduct = data?.filter((item) => item?.category === cat);

    setMyData(fillproduct);

    console.log("fillarr", fillproduct);
  };

  console.log(myData);
  const filterSearch = () => {
    const searchproduct = myData.filter((item) => {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setMyData(searchproduct);
  };
  useEffect(() => {
    filterSearch();
  }, [query]);

  if (!myData) return <h1>Loding .....</h1>;

  return (
    <>
      <Carouselitem />
      <Datafilter handleFilter={handleFilter} />
     { myData? <div className="shopping-card">
        {myData.map((post) => {
          const { id, category, title, image, price } = post;
          return (
            <div className="card" key={id}>
              <div className="card-img">
                <img src={image} alt="" />
              </div>
              <div className="card-title">
                <h1>Category- {category}</h1>
                <Link to={`/product/${title}`} className="link">
                  <h2>{title.substring(1, 30)}...</h2>
                </Link>
                <h3> Price-${price}</h3>
                <button className="card-btn" onClick={() => getData(post)}>
                  Add to Cart
                </button>
              </div>
            </div>
        
          );
        })}
      </div>:<h1>Loaidng....</h1>
}
    </>
  );
}

export default Card;
