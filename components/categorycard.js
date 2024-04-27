import Image from "next/image";
import { useRouter } from 'next/router';

export default function CategoryCard({ category, image }) {
  const router = useRouter();

  const handleNavigate = (category) => {
    router.push({
        pathname: '/category',
        query: { category: category },
    })
  };

  return (
    <button onClick={() => handleNavigate(category)}>
    <div className="flex relative h-60 w-64 mx-6 rounded-lg bg-white shadow-lg mb-20 md:mb-20 transition duration-150 hover:scale-110">
      <div className="absolute left-2/4 -translate-x-2/4 -top-[80px] h-[240px] w-[240px]">
        <img src={image} alt="bg" />
      </div>
      <div className="flex absolute justify-center items-end w-full h-full">
        <div className="flex p-5">
          <span className="text-center font-en-font text-lg">{category}</span>
          {/* <button onClick={handleNavigate}> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 pt-1.5 pl-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          {/* </button> */}
        </div>
      </div>
    </div>
    </button>
  );
}
