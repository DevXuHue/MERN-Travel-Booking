import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DefaultLayout from "../../layout/defaultLayout";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";

const RautaurantDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(`/restaurants/${params.id}`);

  useEffect(() => {
    if (error) {
      navigate(`/restaurants`);
      toast.error("Có lỗi xảy ra!!");
    }
  }, [error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DefaultLayout>
          <div>
            <h3 className="text-blue-500 font-extrabold text-3xl mb-2">
              {data?.restaurant?.name || "Name Restaurant"}
            </h3>
            <p className="text-gray-400 text-sm mb-8 italic">
              {data?.restaurant?.title || "2 loại thôi: gia đình, cặp đôi."}
            </p>
            <div className="mb-2 text-sm font-semibold">
              <span className="text-blue-500">Địa chỉ </span>
              {data?.restaurant?.address || "Chưa cập nhật"}
            </div>
            <div className="flex flex-col gap-4">
              <img
                className="w-full h-full object-cover rounded-sm hover:scale-x-105 duration-150"
                src={data?.restaurant?.photos[0]}
                alt=""
              />
              <div className="mb-2 text-sm font-semibold">
                <span className="text-blue-500">Mô tả </span>
                {data?.restaurant?.desc || "Chưa cập nhật"}
              </div>
              <button
                onClick={() => navigate(`/hotels/${data?.restaurant?.hotels}`)}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Checking hotels
              </button>
            </div>
          </div>
        </DefaultLayout>
      )}
    </>
  );
};

export default RautaurantDetails;
