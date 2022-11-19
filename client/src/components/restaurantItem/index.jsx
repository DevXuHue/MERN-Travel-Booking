import React from "react";
import { Link } from "react-router-dom";

const RestaurantItem = ({ item }) => {
  return (
    <div>
      <Link to={`/restaurant/${item?._id}`}>
        <img
          src={item?.photos[0]}
          alt=""
          className="rounded-md cursor-pointer mb-2 max-h-[200px] hover:scale-105 transition-all duration-150 ease-linear"
        />
        <div className="p-2 flex flex-col gap-2">
          <h5 className="text-sm font-semibold text-gray-700">
            <span className="text-blue-500">Tên quán: </span>
            {item?.name}
          </h5>
          <p className="text-sm font-semibold text-gray-700">
            <span className="text-blue-500">Mô tả: </span>
            {item?.title}
          </p>
          <p className="text-sm font-semibold text-gray-700">
            <span className="text-blue-500">Address: </span> {item?.address}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantItem;
