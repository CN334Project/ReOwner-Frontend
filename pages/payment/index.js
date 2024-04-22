import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {


  return (
    <div>
      <Navbar />
      <h1 style={{ marginLeft: "140px", color: "black", fontSize: "96px", fontFamily: "Fraunces, sans-serif", fontWeight: "bolder", }}>
        Payment
      </h1>

      <div style={{ position: 'relative' }}>
        <Image src="/bgPayment.png" alt="bg" width={1499} height={1448} />

        <div style={{ marginLeft: "140px", marginRight: "140px", position: 'absolute', top: '150px', left: 0, right: 0, zIndex: 1 }}>
          <p style={{ color: "black", fontSize: "40px", fontFamily: "Fraunces, sans-serif", fontWeight: "bold", }}>Address</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12 border-b border-black" >

            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                ชื่อ-นามสกุล
              </label>
              <div className="mt-2">
                <input
                  type="text" a
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="province" className="block text-sm font-medium leading-6 text-gray-900">
                จังหวัด
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="province"
                  id="province"
                  autoComplete="province"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="district" className="block text-sm font-medium leading-6 text-gray-900">
                เขต/อำเภอ
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="district"
                  id="district"
                  autoComplete="district"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                เบอร์โทรศัพท์
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                แขวง/ตำบล
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                รหัสไปรษณีย์
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-4 mb-20">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ที่อยู่
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

            <p style={{ color: "black", fontSize: "40px", fontFamily: "Fraunces, sans-serif", fontWeight: "bold", paddingTop: "30px"}}>Payment</p>

            <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-12 ">
              <button className="sm:col-span-4 mt-10">
              <Image src="/promptpay.png" alt="bg" width={350} height={262} />
              </button>
              <button className="sm:col-span-4 mt-10">
              <Image src="/credit.png" alt="bg" width={350} height={262} />
              </button>
              <button className="sm:col-span-4 mt-10">
              <Image src="/bank.png" alt="bg" width={350} height={262} />
              </button>
            </div>

            <div style={{ marginLeft: "920px",marginTop: "80px" }}>
      <Link href=" ">
        <button className="focus:outline-none" >
          <Image
            src="/buttonPayment.png"
            alt="Shop Now"
            width={289}
            height={101}
          />
        </button>
      </Link>
    </div>

        </div>



      </div>

    </div>

  );
}
