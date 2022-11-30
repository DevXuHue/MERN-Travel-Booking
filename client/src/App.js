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
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
