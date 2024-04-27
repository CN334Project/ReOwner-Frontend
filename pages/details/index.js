import Image from "next/image";
import Navbar from "../../components/navbar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Details() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  const name = router.query.keyword;

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        if (router.query.keyword) {
          const API_URL = `http://localhost:3005/products/${router.query.keyword}`;
          const result = await fetch(API_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (result.ok) {
            const responseBody = await result.text();
            setItems(JSON.parse(responseBody));
          } else {
            throw new Error(`Error: ${result.status} - ${result.body}`);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchProductList();
  }, [router.query.keyword]); // Add router.query.keyword to dependency array

  // const handleAddToCart = () => {
  //   console.log("Add to cart clicked");
  // };

  const handleAddToCart = async () => {
    try {
      const cartID = localStorage.getItem("cartID");
      if (cartID) {
        const response = await axios.patch(
          `http://localhost:3005/cart/${cartID}`,
          {
            productId: items._id,
          }
        );
      } else {
        const response = await axios.post("http://localhost:3005/cart/add", {
          productId: items._id, // Assuming items._id is the ID of the product
        });
        const newCartID = response.data._id;
        localStorage.setItem("cartID", newCartID);

        // console.log("Product added to cart:", response.data._id);
      }
      router.push("/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const play = async () => {
    const audioCtx = new AudioContext();
    let buffer = null;
    const handleAudioProduct = async () => {
      const API_URL = `http://localhost:3005/sound/${router.query.keyword}.wav`;
      try {
        const result = await fetch(API_URL, {
          method: "GET",
          
        });
        if (result.ok) {
          const arrayBuffer = await result.arrayBuffer();
          return arrayBuffer;
        } else {
          throw new Error(`Error: ${result.status} - ${result.statusText}`);
        }
      } catch (err) {
        throw err;
      }
    };
    const audioData = await handleAudioProduct();
    audioCtx.decodeAudioData(
      audioData,
      (decodedData) => {
        buffer = decodedData;
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start(0);
      },
      (error) => {
        console.error("Error decoding audio data:", error);
      }
    );
  };

  return (
    <div>
      <Navbar />

      <div className="px-40 relative">
        <div className="relative">
          <Image src="/bgDetails.png" alt="bg" width={1197} height={453} />
          <div className="absolute inset-0 flex justify-center items-center">
            <img src={items.image} alt="Your Image" width={536} height={536} />
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-black text-5xl font-bold leading-tight mb-4 font-en-font">
            {items.name}
          </h1>

          <h3 className="text-black text-xl font-semibold mb-4 font-th-font">
            รายละเอียดสินค้า
          </h3>

          <p className="text-black text-base mb-10 font-th-font">
            {items.description}
          </p>
          <button onClick={play} className="mr-5 mb-7 flex-shrink-0">
            <img src="/volume.png" alt="Speaker Icon" className="w-8 h-8" />
          </button>

          <div className="flex justify-between items-center mb-10">
            <div className="relative">
              <Image
                src="/priceContainer.png"
                alt="bg"
                width={383}
                height={103}
              />
              <div className="absolute inset-0 flex justify-center items-center text-white text-5xl font-th-font">
                {items.price} บาท
              </div>
            </div>

            <button onClick={handleAddToCart} className="focus:outline-none">
              <Image
                src="/buttonAddtocart.png"
                alt="Add to Cart"
                width={289}
                height={101}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
