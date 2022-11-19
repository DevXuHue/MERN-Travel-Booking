import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item }) => {
  return (
    <Link to={`/hotels/${item._id}`} className="fpItem cursor-pointer ">
      <img
        src={item.photos[0]}
        alt=""
        className="fpImg hover:scale-19 transition duration-150 ease-linear"
      />
      <span className="fpName">{item.name}</span>
      <span className="fpCity">{item.city}</span>
      <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
      {item.rating && (
        <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
        </div>
      )}
    </Link>
  );
};

export default ProductItem;
