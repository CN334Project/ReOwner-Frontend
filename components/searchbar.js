import Image from "next/image";

export default function Searchbar() {
  return (
    <div class="flex justify-center my-10">
            <form class="relative flex 2 items-center w-6/12 h-12 rounded-lg bg-white shadow-lg mx-100">
                <span
                    class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                    id="button-addon2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input
                    type="search"
                    class="relative m-0 block w-full focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    id="exampleFormControlInput4" />
            </form>  
        </div>
  )
}