import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import clientAxios from "../../api";
import { AuthContext } from "../../context/AuthContext";

const Payment = () => {
  const { loading, user } = useContext(AuthContext);
  const payBtn = useRef(null);
  const stripe = useStripe();
  const elements = useElements();

  const info = localStorage.getItem("orderInfoTravel")
    ? JSON.parse(localStorage.getItem("orderInfoTravel"))
    : [];

  console.log(info);

  const navigate = useNavigate();

  const handleSubmitFormPayment = async (e) => {
    e.preventDefault();
    const id = toast.loading("Payment...");

    payBtn.current.disabled = true;

    try {
      const { data } = await clientAxios.post(`/payment/payment/process`, {
        amount: Math.round(info.totalPrice),
      });

      const client_secret = data.client_secret;

      console.log(client_secret);

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: info.address,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;
        toast.error(result.error);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          info.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          const { data } = await clientAxios.post("/order", info);

          if (data.success) {
            toast.success("success", { id });
          }

          navigate("/");
          localStorage.clear();
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error("Errror to payments", { id });
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [user, navigate]);
  return (
    <div className="my-5 mx-5">
      <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
        Payments Info
      </h1>
      <h3 className="pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 ">
        Infomation
      </h3>
      <p className="text-base text-gray-400 mb-2">Travel booking</p>
      <form
        onSubmit={handleSubmitFormPayment}
        className="bg-white p-5 rounded-md"
      >
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-base mb-1 font-semibold">Credit Card</label>
          <CardNumberElement />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-base mb-1 font-semibold">CardExpiry</label>
          <CardExpiryElement />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-base mb-1 font-semibold">Card cvc</label>
          <CardCvcElement />
        </div>
        <button
          type="submit"
          ref={payBtn}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
        >
          Pay - {info.totalPrice}$
        </button>
      </form>
    </div>
  );
};

export default Payment;
