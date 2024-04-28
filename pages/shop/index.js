import Navbar from "../../components/navbar";
import Searchbar from "../../components/searchbar";
import CategoryCard from "@/components/categorycard";
import ItemCard from "@/components/itemcard";
import React, { useState, useEffect } from "react";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const categorys = [
    {
      id: 1,
      category: "furniture",
      photo: "chair-removebg-preview.png",
    },
    {
      id: 2,
      category: "decor",
      photo: "decor.png",
    },
    {
      id: 3,
      category: "lighting",
      photo: "lighting.png",
    },{
      id: 4,
      category: "clothing",
      photo: "clothing.png",
    },]
  

  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data fetched successfully:", data);
        setItems(data); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Searchbar setSearchQuery={setSearchQuery} />
      <div class="flex m-[50px] mt-24 pt-10 sm:justify-center">
        {categorys.map((category, image) => (
          <CategoryCard key={category} category={category.category} image={category.photo} />
        ))}
        {/* <CategoryCard /> */}
      </div>
      <div class="flex flex-col items-center justify-center h-full w-full">
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-27 7C-27 7 98.1347 67.005 276.606 90C455.076 112.995 669.959 14.6644 911.511 100.622C1153.06 186.579 1450 7 1450 7V445H-27V7Z"
            fill="white"
            stroke="#a3a3a3"
          />
        </svg>
      </div>
      <div class="w-full bg-white">
        <h1 class="font-en-font font-semibold text-4xl mb-12 pl-20">
          Most viewed
        </h1>
        <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 h-screen w-full mx-3 content-start justify-items-center">
        {searchQuery
            ? filteredItems.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))
            : items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))}
        </div>
      </div>
    </>
  );
}
