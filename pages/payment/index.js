import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Payment() {
  const router = useRouter();
  const [cartID, setCartID] = useState("");

  useEffect(() => {
    const cartIDFromStorage = localStorage.getItem("cartID");
    if (cartIDFromStorage) {
      setCartID(cartIDFromStorage);
    } else {
      router.push("/shop");
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    province: "",
    district: "",
    subdistrict: "",
    postalCode: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithCartID = { ...formData, cartID: cartID };
      const response = await axios.post(
        "http://localhost:3005/payments",
        formDataWithCartID
      );
      localStorage.clear()
      router.push("/home")
      console.log("Payment created:", response.data);
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1
        style={{
          marginLeft: "140px",
          color: "black",
          fontSize: "96px",
          fontFamily: "Fraunces, sans-serif",
          fontWeight: "bolder",
        }}
      >
        Payment
      </h1>

      <div style={{ position: "relative" }}>
        <Image src="/bgPayment.png" alt="bg" width={1499} height={1448} />

        <div
          style={{
            marginLeft: "140px",
            marginRight: "140px",
            position: "absolute",
            top: "150px",
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <p
            style={{
              color: "black",
              fontSize: "40px",
              fontFamily: "Fraunces, sans-serif",
              fontWeight: "bold",
            }}
          >
            Address
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 border-b border-black">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  ชื่อ-นามสกุล
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  จังหวัด
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="province"
                    id="province"
                    value={formData.province}
                    onChange={handleChange}
                    autoComplete="province"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="district"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  เขต/อำเภอ
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="district"
                    id="district"
                    value={formData.district}
                    onChange={handleChange}
                    autoComplete="district"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  เบอร์โทรศัพท์
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="subdistrict"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  แขวง/ตำบล
                </label>
                <div className="mt-2">
                  <input
                    id="subdistrict"
                    name="subdistrict"
                    type="subdistrict"
                    value={formData.subdistrict}
                    onChange={handleChange}
                    autoComplete="subdistrict"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  รหัสไปรษณีย์
                </label>
                <div className="mt-2">
                  <input
                    id="postalCode"
                    name="postalCode"
                    type="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    autoComplete="postalCode"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4 mb-20">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900 font-th-font"
                >
                  ที่อยู่
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </form>

          <p
            style={{
              color: "black",
              fontSize: "40px",
              fontFamily: "Fraunces, sans-serif",
              fontWeight: "bold",
              paddingTop: "30px",
            }}
          >
            Payment
          </p>

          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-12">
            <input
              type="radio"
              name="paymentMethod"
              id="promptpay"
              value="promptpay"
              className="sr-only"
              onChange={handleChange}
            />
            <label
              htmlFor="promptpay"
              className="sm:col-span-4 mt-10 cursor-pointer"
            >
              <Image
                src="/promptpay.png"
                alt="PromptPay"
                width={350}
                height={262}
              />
            </label>

            <input
              type="radio"
              name="paymentMethod"
              id="credit"
              value="credit"
              className="sr-only"
              onChange={handleChange}
            />
            <label
              htmlFor="credit"
              className="sm:col-span-4 mt-10 cursor-pointer"
            >
              <Image
                src="/credit.png"
                alt="Credit Card"
                width={350}
                height={262}
              />
            </label>

            <input
              type="radio"
              name="paymentMethod"
              id="bank"
              value="bank"
              className="sr-only"
              onChange={handleChange}
            />
            <label
              htmlFor="bank"
              className="sm:col-span-4 mt-10 cursor-pointer"
            >
              <Image
                src="/bank.png"
                alt="Bank Transfer"
                width={350}
                height={262}
              />
            </label>
          </div>

          <div style={{ marginLeft: "970px", marginTop: "80px" }}>
            <Link href=" ">
              <button onClick={handleSubmit} className="focus:outline-none">
                <Image
                  src="/buttonPayment.png"
                  alt="Shop Now"
                  width={239}
                  height={101}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
