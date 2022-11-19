import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Header />
      <main>
        <div className="max-w-[1024px] mx-auto px-4 my-10 min-h-[50vh]">
          {children}
        </div>
      </main>
      <div className="flex items-center justify-center flex-col">
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
