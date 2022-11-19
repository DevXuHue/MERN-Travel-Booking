import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading";
import "./home.css";

import BannerImgs from "../../assets/images/banner2.jpg";

const Home = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    if (user?.isAdmin) {
      window.location.href = "https://localhost:3001";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [user, navigate]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-slate-200">
          <Navbar />
          <Header />
          <div
            className="w-full h-[500px] lg:bg-cover bg-cover bg-center bg-no-repeat object-contain rounded-[10px] opacity-95 z-0 flex items-center justify-center text-4xl font-extrabold tracking-widest text-white pb-10"
            style={{
              backgroundImage: `url(${BannerImgs})`,
            }}
          >
            <h1>Booking.com - Travel website</h1>
          </div>
          <div className="homeContainer">
            <Featured />
            <h1 className="text-2xl text-blue-600 font-extrabold mt-4 ">
              Tìm theo loại chỗ nghỉ
            </h1>
            <PropertyList />
            <h1 className="text-2xl text-blue-600 font-extrabold mt-4 ">
              Nhà ở mà khách yêu thích
            </h1>
            <FeaturedProperties />
            <MailList />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
