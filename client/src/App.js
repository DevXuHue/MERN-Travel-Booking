import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register";
import "./index.css";
import Restaurants from "./pages/restaurants";
import HotelsByType from "./pages/hotelsbytype";
import RautaurantDetails from "./pages/restaurantDetails";
import NotFound from "./pages/notfound";
import InfoRegisterHotel from "./pages/infoRegisterHotel";
import React, { useEffect } from "react";
import clientAxios from "./api";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./pages/payment";
import DefaultLayout from "./layout/defaultLayout";

function App() {
  const [stripeApiKey, setStripeApiKey] = React.useState("");

  async function getStripeApiKey() {
    const { data } = await clientAxios.get("/payment/stripeapikey", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      withCredentials: true,
    });

    console.log(data);

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    getStripeApiKey();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/type/:type" element={<HotelsByType />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<RautaurantDetails />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/registerhotel/:id" element={<InfoRegisterHotel />} />
        <Route
          path="/process/payment"
          element={
            <>
              <DefaultLayout>
                {stripeApiKey && (
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                )}
              </DefaultLayout>
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
