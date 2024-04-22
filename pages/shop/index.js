import Navbar from "../../components/navbar";
import Searchbar from "../../components/searchbar"
import CategoryCard from "@/components/categorycard";
import ItemCard from "@/components/itemcard";

export default function Shop() {
    return (
    <>  
        <div>
            <Navbar />
        </div>
        <Searchbar/>
        <div class="flex flex-wrap m-[50px] mt-24 pt-10 sm:justify-center">
            <CategoryCard/>
            <CategoryCard/>
        </div>
        <div class="flex flex-col items-center justify-center h-full w-full">
            <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-27 7C-27 7 98.1347 67.005 276.606 90C455.076 112.995 669.959 14.6644 911.511 100.622C1153.06 186.579 1450 7 1450 7V445H-27V7Z" fill="white" stroke="#a3a3a3"/>
            </svg>
        </div>
        <div class="h-screen w-full bg-white">
            <h1 class="font-en-font font-semibold text-4xl my-8 mb-12 pl-20">Most viewed</h1>
            <div class="grid grid-flow-row-dense grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 h-screen w-full mx-3 content-start justify-items-center">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </div>
    </>
    )
}




