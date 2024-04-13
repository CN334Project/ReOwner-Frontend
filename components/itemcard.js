import Image from "next/image";

export default function ItemCard() {
  return (
    <div class="flex items-center justify-center max-w-xl max-h-56 p-3">
        <div class="relative">
            <img class="relative z-0" src="/Ellipse 7.png" />
            <img class="absolute z-10 top-0 left-0" src="/glostad-2-seat-sofa-knisa-dark-grey__0950864_pe800736_s5 2.png" />
        </div>
        <div class="mx-4">
            <div class="flex flex-wrap">
                <p class="font-en-font text-3xl pr-2 ">GLOSTAD</p>
                <p class="font-th-font text-3xl ">กลูสตอด</p>
            </div>
            <p className="font-th-font">โซฟา 2 ที่นั่ง, คนีซา เทาเข้ม</p>
            <p className="font-th-font">2,990 บาท</p>
        </div>
        <div>
            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:stroke-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg></button>
        </div>
    </div>
    )
}