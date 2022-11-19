import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import ProductItem from "../../components/productItem";
import DefaultLayout from "../../layout/defaultLayout";

const HotelsByType = () => {
  const params = useParams();

  const { data, loading, error } = useFetch(
    `/hotels/getHotelsByType/${params.type}`
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <DefaultLayout>
      <div>
        <h3 className="text-blue-500 font-extrabold text-3xl mb-2">
          Hotels by {params.type}
        </h3>
        <p className="text-xs text-gray-500">
          <span className="text-blue-400 font-semibold">Số lượng :</span>{" "}
          {data?.countHotelsByType}
        </p>
        <p className="text-gray-400 text-base mb-8 italic">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed saepe
          laboriosam pariatur repellat magnam corrupti velit, consectetur
          consequatur eligendi vero molestiae non aliquam commodi dolorum
          voluptatem blanditiis consequuntur culpa fugit!
        </p>
        {data &&
          data.hotels &&
          data.hotels.map((item) => <ProductItem item={item} key={item._id} />)}
        {!data?.hotels?.length && <h5>Hiện tại chưa có khách sạn</h5>}
      </div>
    </DefaultLayout>
  );
};

export default HotelsByType;
