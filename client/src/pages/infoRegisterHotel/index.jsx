import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/input";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import DefaultLayout from "../../layout/defaultLayout";

const InfoRegisterHotel = () => {
  const { loading, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const params = useParams();

  const {
    data,
    loading: loadingData,
    error,
  } = useFetch(`/hotels/find/${params.id}`);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <DefaultLayout>
          {loadingData ? (
            <Loading />
          ) : (
            <div>
              <div className="hotelWrapper">
                {/* <button className="bookNow">Reserve or Book Now!</button> */}
                <h1 className="hotelTitle">{data.name}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{data.address}</span>
                </div>
                <span className="hotelDistance">
                  Excellent location – {data.distance}m from center
                </span>
                <span className="hotelPriceHighlight">
                  Book a stay over ${data.cheapestPrice} at this property and
                  get a free airport taxi
                </span>
                <div className="hotelImages">
                  {data.photos?.map((photo, i) => (
                    <div className="hotelImgWrapper" key={i}>
                      <img src={photo} alt="" className="hotelImg" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="my-3 text-3xl font-semibold">Info order</h3>
                <Input label="Name" name="name" placehoder="Yourname" />
                <Input
                  label="Phone"
                  name="phoneNo"
                  type="number"
                  placehoder="Yourname"
                />
              </div>
            </div>
          )}
        </DefaultLayout>
      )}
    </>
  );
};

export default InfoRegisterHotel;
