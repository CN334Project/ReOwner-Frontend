import Image from "next/image";

export default function DashBoard() {
    return (
        <>
            <div className="w-screen flex justify-center pt-5">
                <Image src="/Logo.png" alt="Logo" width={238} height={110} />
            </div>
            <div className="flex justify-center items-center w-screen h-40 pt-10">
                <h1 className="font-en-font font-bold text-7xl">Dashboard</h1>
            </div>
            <div class="flex flex-col items-center justify-center h-full w-screen -mt-10">
                <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-13 82.0949C-13 82.0949 108 -6 242.5 72.057C443.5 201.5 620.542 42.1303 827 112.595C1033.46 183.059 1454.5 4 1454.5 4L1486 1459.5H-13V82.0949Z" fill="white"/>
                    <path d="M1454.02 4.74715L1485.49 1459H-12.5V82.3518C-12.4595 82.323 -12.413 82.2901 -12.3607 82.2532C-12.1298 82.0904 -11.784 81.8493 -11.3268 81.5378C-10.4122 80.9147 -9.05154 80.0097 -7.27102 78.8847C-3.70991 76.6348 1.53031 73.5054 8.23973 69.9927C21.6593 62.9669 40.9518 54.4101 64.4386 48.2884C111.405 36.0469 175.134 33.543 242.239 72.4836C342.898 137.303 437.566 129.794 532.78 114.937C543.267 113.3 553.76 111.575 564.268 109.848C649.194 95.884 735.104 81.7587 826.839 113.068C878.552 130.718 943.661 132.732 1012.2 125.852C1080.74 118.97 1152.75 103.186 1218.3 85.2038C1283.85 67.2207 1342.95 47.0355 1385.66 31.3464C1407.01 23.5017 1424.27 16.7807 1436.19 12.0207C1442.15 9.64065 1446.78 7.75083 1449.91 6.45586C1451.48 5.80838 1452.68 5.30961 1453.48 4.97262C1453.68 4.88693 1453.86 4.8117 1454.02 4.74715Z" stroke="black" stroke-width="0.5"/>
                </svg>
            </div>
            <div className="h-screen w-screen bg-white">
                <div className="flex justify-center items-center w-full bg-white">
                    <div className="w-80 h-48 shadow-md border-[1px] border-black rounded-md text-center mx-10 ">
                        <p className="mt-8 font-en-font text-xl">Total products</p>
                        <p className="mt-8 font-en-font text-5xl">30</p>
                    </div>
                    <div className="w-80 h-48 shadow-md border-[1px] border-black rounded-md text-center mx-10">
                        <p className="mt-8 font-en-font text-xl">Total orders</p>
                        <p className="mt-8 font-en-font text-5xl">2</p>
                    </div>
                    <div className="w-80 h-48 shadow-md border-[1px] border-black rounded-md text-center mx-10">
                        <p className="mt-8 font-en-font text-xl">Total sales</p>
                        <p className="mt-8 font-en-font text-5xl">30k</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="mt-20 font-en-font text-3xl">Pageviews</p>
                    <div className="w-3/4 border-[1px] border-black h-[800px] shadow-inner bg-white mt-10 rounded-md">

                    </div>
                </div>
            </div>
        </>
    )
}