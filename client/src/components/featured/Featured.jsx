import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Huế,Đà Nẵng,Hồ Chí Minh"
  );

  return (
    <>
      <div className="text-[#003580] text-4xl font-extrabold">Categories</div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 mx-auto max-w-[1024px] gap-3">
        {loading ? (
          "Loading please wait"
        ) : (
          <>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>
                    <span>{data[0]}</span> properties
                  </h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
            <Link to="/categries/:id">
              <div className="featuredItem cursor-pointer hover:scale-105 duration-150 ease-in transition-all">
                <img
                  src="https://icdn.dantri.com.vn/2018/12/21/fbimg1545378865984-15453805041991111822106.jpg"
                  alt=""
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h1>Huế</h1>
                  <h2>{data[0]} properties</h2>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Featured;
