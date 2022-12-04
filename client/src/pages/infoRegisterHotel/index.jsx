import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
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

  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState("");
  const [quantityPeople, setQuantityPeople] = useState(0);
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date(Date.now()));
  const [endDate, setEndDate] = useState();

  const startDateDay = new Date(startDate);
  const endDateDay = new Date(endDate);

  const totalDats =
    !startDate || !endDate
      ? 1
      : (endDateDay.getTime() - startDateDay.getTime()) / (1000 * 3600 * 24);

  const {
    data,
    loading: loadingData,
    error,
  } = useFetch(`/hotels/find/${params.id}`);

  const totalPrice = quantityPeople * data.distance * totalDats * 0.9;

  const handleSubmitFormRegiserTravel = (e) => {
    e.preventDefault();

    const id = toast.loading("Saving ....");

    const infoOrder = {
      name,
      phone,
      quantityPeople,
      email,
      address,
      totalPrice,
      totalDays: totalDats,
      startDateDay,
      endDateDay,
      hotelId: params.id,
    };

    setTimeout(() => {
      localStorage.setItem("orderInfoTravel", JSON.stringify(infoOrder));
      toast.success("Success infoOrder", { id: id });
      navigate("/process/payment");
    }, 2000);
  };

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
              <form onSubmit={handleSubmitFormRegiserTravel}>
                <h3 className="my-3 text-3xl font-semibold">Info order</h3>
                <Input
                  label="Name"
                  name="name"
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Yourname"
                />
                <Input
                  label="Phone"
                  name="phoneNo"
                  type="number"
                  placeholder="Yourname"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  label="Địa chỉ"
                  name="address"
                  type="text"
                  placeholder="Địa chỉ của bạn"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  label="Số người"
                  name="numberPerson"
                  type="number"
                  min={1}
                  placeholder="number person"
                  value={quantityPeople}
                  onChange={(e) =>
                    setQuantityPeople(
                      Number(e.target.value) > 0
                        ? Number(e.target.value)
                        : Number(-e.target.value)
                    )
                  }
                />
                <Input
                  label="Email liên hệ"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@example.com"
                />
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  label="Start"
                />
                <Input
                  type="date"
                  label="End"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <div>
                  <span>Tổng ngày {totalDats}</span>
                </div>
                <div>
                  <span>Tổng tiền {totalPrice}$</span>
                </div>
                <button
                  disabled={
                    !name ||
                    !phone ||
                    !startDate ||
                    !endDate ||
                    !email ||
                    !quantityPeople ||
                    !address
                  }
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50"
                >
                  Thanh toán
                </button>
              </form>
            </div>
          )}
        </DefaultLayout>
      )}
    </>
  );
};

export default InfoRegisterHotel;
