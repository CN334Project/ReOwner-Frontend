import Image from "next/image";
import Navbar from "../../components/navbar";
import CartCard from "@/components/cartcard";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3005/cart")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setCartItems(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const calculateTotalPrice = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
      return 0; // Return 0 if cartItems is undefined or empty
    }

    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.product.price;
    });
    return totalPrice;
  };

  const handleConfirm = () => {
    if (!cartItems || cartItems.length === 0) {
      return true;
    }
  };

  return (
    <div>
      <Navbar />

      <div className="relative">
        <div className="mt-20 ml-32">
          <h1 className="text-black text-8xl font-black leading-tight font-en-font">
            My Cart
          </h1>
          <div className="font-th-font">
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
            {/* {products.map((product) => (
              <CartCard key={product.id} data={product} />
            ))} */}
          </div>

          <div className="flex justify-between mb-32">
            <div className="flex items-center">
              <div className="text-black text-5xl font-medium font-en-font">
                Total {calculateTotalPrice(cartItems)} บาท
              </div>
            </div>
            <div style={{ marginRight: "133px" }}>
              <button
                onClick={() => router.push("/payment")}
                disabled={handleConfirm()}
                className="focus:outline-none"
              >
                <Image
                  src="/buttonConfirm.png"
                  alt="Add to Cart"
                  width={289}
                  height={101}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
