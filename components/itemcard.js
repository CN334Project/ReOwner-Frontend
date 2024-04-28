import Image from "next/image";
import { useRouter } from "next/router";

export default function ItemCard({ item }) {
  const router = useRouter();

  const handleNavigate = (item) => {
    router.push({
      pathname: "/details",
      query: { keyword: item._id },
    });
  };
  return (
    <button onClick={() => handleNavigate(item)}>
      <div class="flex items-center justify-center max-w-xl max-h-56 p-3">
        <div class=" flex flex-col relative h-56 w-48 justify-center">
          <img class="relative z-0" src="/Ellipse 7.png" />
          <img class="absolute z-10 top-0 left-0" src={item.image} />
        </div>
        <div class="flex flex-col mx-5 h-56 w-80 pb-4 justify-center text-left">
          <div class="flex flex-wrap">
            <p class="font-en-font text-3xl pr-2">{item.name}</p>
          </div>
          <p class="font-th-font">{item.shortdescription}</p>
          <p class="font-th-font">{item.price} บาท</p>
        </div>

        <div>
          <button className="hover:animate-sideways">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </button>
  );
}
