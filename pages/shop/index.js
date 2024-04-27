import Navbar from "../../components/navbar";
import Searchbar from "../../components/searchbar";
import CategoryCard from "@/components/categorycard";
import ItemCard from "@/components/itemcard";
import React, { useState, useEffect } from "react";

export default function Shop() {
  const [items, setItems] = useState([]);

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
        setItems(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Searchbar />
      <div class="flex flex-wrap m-[50px] mt-24 pt-10 sm:justify-center">
        {categorys.map((category, image) => (
          <CategoryCard key={category} category={category.category} image={category.photo} />
        ))}
        {/* <CategoryCard /> */}
      </div>
      <div class="flex flex-col items-center justify-center h-full w-screen">
            <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1462.75 0.437996V437.75H-35.75V0.392818C-35.7452 0.39504 -35.7404 0.397284 -35.7355 0.39955C-35.4892 0.514013 -35.1211 0.684115 -34.6334 0.906896C-33.658 1.35246 -32.2043 2.00873 -30.2901 2.85204C-26.4616 4.53864 -20.7909 6.97336 -13.4204 9.9667C1.32056 15.9534 22.861 24.1746 50.0624 33.1144C104.465 50.9938 181.512 71.7481 272.096 83.248C341.664 92.0799 416.686 83.0221 496.56 73.3786C520.711 70.4627 545.305 67.4933 570.327 64.9487C678.12 53.9864 793.884 50.8972 916.407 93.8578C1039.06 136.864 1175.75 113.439 1281.75 79.283C1334.76 62.2035 1380.1 42.4375 1412.19 26.9413C1428.24 19.1931 1440.97 12.5122 1449.69 7.76803C1454.05 5.39593 1457.41 3.50799 1459.68 2.21288C1460.81 1.56533 1461.68 1.06599 1462.25 0.728444C1462.45 0.612283 1462.62 0.515282 1462.75 0.437996Z" fill="white" stroke="black" stroke-width="0.5"/>
            </svg>
      </div>
      <div class="h-screen w-screen bg-white">
        <h1 class="font-en-font font-semibold text-4xl pt-10 mb-5 pl-20">
            Most viewed
        </h1>
        <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-8 h-screen w-full content-start justify-items-center">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}

//     return (
//     <>  
//         <div>
//             <Navbar/>
//         </div>
//         <Searchbar/>
//         <div class="flex flex-wrap m-[20px] mt-24 pt-10 sm:justify-center">
//             <CategoryCard/>
//             <CategoryCard/>
//             <CategoryCard/>
//             <CategoryCard/>
//         </div>
//         <div class="flex flex-col items-center justify-center h-full w-screen">
//             <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M1462.75 0.437996V437.75H-35.75V0.392818C-35.7452 0.39504 -35.7404 0.397284 -35.7355 0.39955C-35.4892 0.514013 -35.1211 0.684115 -34.6334 0.906896C-33.658 1.35246 -32.2043 2.00873 -30.2901 2.85204C-26.4616 4.53864 -20.7909 6.97336 -13.4204 9.9667C1.32056 15.9534 22.861 24.1746 50.0624 33.1144C104.465 50.9938 181.512 71.7481 272.096 83.248C341.664 92.0799 416.686 83.0221 496.56 73.3786C520.711 70.4627 545.305 67.4933 570.327 64.9487C678.12 53.9864 793.884 50.8972 916.407 93.8578C1039.06 136.864 1175.75 113.439 1281.75 79.283C1334.76 62.2035 1380.1 42.4375 1412.19 26.9413C1428.24 19.1931 1440.97 12.5122 1449.69 7.76803C1454.05 5.39593 1457.41 3.50799 1459.68 2.21288C1460.81 1.56533 1461.68 1.06599 1462.25 0.728444C1462.45 0.612283 1462.62 0.515282 1462.75 0.437996Z" fill="white" stroke="black" stroke-width="0.5"/>
//             </svg>
//         </div>
//         <div class="h-screen w-screen bg-white">
//             <h1 class="font-en-font font-semibold text-4xl pt-10 mb-5 pl-20">Most viewed</h1>
//             <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-8 h-screen w-full content-start justify-items-center">
//                 <ItemCard/>
//                 <ItemCard/>
//                 <ItemCard/>
//             </div>
        </div>
      </div>
    </>
  );
}
