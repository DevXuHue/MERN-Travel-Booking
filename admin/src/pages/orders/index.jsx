import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import moment from "moment";

const Order = () => {
  const { loading, data, error } = useFetch("/order");

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="list">
            <Sidebar />
            <div className="listContainer">
              <Navbar />
              <div className="px-2 py-2">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Id payment
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Id user
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        totalPice
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        CreatedAt
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Total days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.orders?.length &&
                      data.orders.map((item, index) => (
                        <tr key={item._id} className="border-b rounded-md">
                          <td className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-md text-gray-900 font-semibold whitespace-nowrap">
                            {item.paymentInfo.id}
                          </td>
                          <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap max-w-[100px] truncate">
                            {item?.users}
                          </td>
                          <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap max-w-[100px] truncate">
                            {item?.totalPrice}$
                          </td>

                          <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {moment(item?.createdAt).format("MMMM Do YYYY")}
                          </td>
                          <td className="text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            <button
                              type="button"
                              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:opacity-50"
                              disabled
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                              views
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
