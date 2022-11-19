import React from "react";
import RestaurantItem from "../../components/restaurantItem";
import useFetch from "../../hooks/useFetch";
import DefaultLayout from "../../layout/defaultLayout";

const Restaurants = () => {
  const { data, error, loading } = useFetch("/restaurants/");
  console.log(data);
  return (
    <DefaultLayout>
      {" "}
      <div>
        <h3 className="text-blue-500 font-extrabold text-3xl mb-2">
          Restaurants List
        </h3>
        <p className="text-xs text-gray-500">
          <span className="text-blue-400 font-semibold">Số lượng :</span>{" "}
          {data?.restaurants?.length}
        </p>
        <p className="text-gray-400 text-base mb-8 italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe
          laboriosam pariatur repellat magnam corrupti velit, consectetur
          consequatur eligendi vero molestiae non aliquam commodi dolorum
          voluptatem blanditiis consequuntur culpa fugit!
        </p>
        <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {data?.restaurants?.map((restaurant) => (
            <RestaurantItem item={restaurant} key={restaurant._id} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Restaurants;
