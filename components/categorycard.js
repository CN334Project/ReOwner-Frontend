import Image from "next/image";

export default function CategoryCard() {
  return (
    <div class="flex relative h-60 w-72 mx-6 rounded-lg bg-white shadow-lg mb-20 md:mb-0 transition duration-150 hover:scale-110">
        <div class="absolute left-2/4 -translate-x-2/4 -top-[80px] h-[240px] w-[240px]">
            <img src="/chair-removebg-preview.png" alt="bg"/>
        </div>
        <div class="flex absolute justify-center items-end w-full h-full">
            <div class="flex p-5">
                <span class="text-center font-en-font text-lg ">Furniture</span>
                <button href="/category">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button> 
            </div>
        </div>
    </div>
    )
}