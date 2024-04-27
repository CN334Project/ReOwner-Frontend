import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Searchbar from "../../components/searchbar";
import ItemCard from "@/components/itemcard";
import React, { useState, useEffect } from "react";

export default function Category() {
  const [items, setItems] = useState([]);
  const router = useRouter();

  const category = router.query.category;

  const handleProductList = async () => {
    const API_URL = `http://localhost:3005/products/category/${category}`;
    try {
      const result = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchProductList = async () => {
        try {
          const result = await handleProductList();
          setItems(JSON.parse(result));
        } catch (err) {
          console.error(err);
        }
      };
      fetchProductList();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <Searchbar />
      <div className="flex justify-center items-center w-screen h-40">
        <h1 className="font-en-font font-bold text-7xl">{category}</h1>
      </div>
      <div class="flex flex-col items-center justify-center h-full w-full">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1455.67 35.2512C1455.7 35.2142 1455.72 35.1787 1455.75 35.1447V809.75H-16.75V0.46102C-16.7449 0.464302 -16.7398 0.467615 -16.7346 0.47096C-16.4672 0.643755 -16.0672 0.900275 -15.5365 1.23562C-14.4751 1.9063 -12.8909 2.89227 -10.798 4.1543C-6.61237 6.67837 -0.392296 10.3067 7.74792 14.7255C24.0283 23.5631 47.9895 35.5628 78.7173 48.2139C140.173 73.5162 228.697 101.426 336.976 111.856C391.127 117.073 448.234 113.42 506.988 107.042C531.751 104.353 556.8 101.182 582.044 97.986C616.713 93.5966 651.75 89.1607 686.919 85.8656C808.454 74.4789 931.389 76.7396 1045.38 141.699C1159.53 206.756 1262.26 179.961 1336.42 136.916C1373.5 115.396 1403.44 89.8111 1424.11 69.6081C1434.45 59.5063 1442.47 50.749 1447.91 44.5165C1450.62 41.4002 1452.7 38.915 1454.09 37.2085C1454.79 36.3553 1455.31 35.6967 1455.67 35.2512Z"
            fill="white"
            stroke="black"
            stroke-width="0.5"
          />
        </svg>
      </div>
      <div class="h-screen w-full bg-white">
        <h1 class="font-en-font font-semibold text-4xl my-8 mb-12 pl-20 -mt-10">
          Most viewed
        </h1>
        <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 h-screen w-full mx-3 content-start justify-items-center">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
