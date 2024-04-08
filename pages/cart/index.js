import Image from "next/image";
import Navbar from "../../components/navbar";
import CartCard from "@/components/cartcard";

export default function Cart() {
  const products = [
    {
      id: 1,
      photo: "/mockup(sofa).png",
      name: "GLOSTAD กลูสตอด",
      details: "โซฟา 2 ที่นั่ง , คนีซา เทาเข้ม",
      price: 2990,
    },
    {
      id: 2,
      photo: "/mockup(chair).png",
      name: "ADDE อ็อดเด",
      details: "เก้าอี้, ขาว",
      price: 349,
    },
  ];
  const totalprice = products.reduce((acc, product) => acc + product.price, 0);

  const handleConfirm = () => {
    console.log("Confirm");
  };

  return (
    <div>
      <Navbar />

      <div className="relative">
        <div className="mt-20 ml-32">
          <h1 className="text-black text-8xl font-black leading-tight fraunces-font">
            My Cart
          </h1>
          {products.map((product) => (
            <CartCard key={product.id} data={product} />
          ))}

          <div className="flex justify-between mb-32">
            <div className="flex items-center">
              <div className="text-black text-5xl font-medium fraunces-font">
                Total {totalprice} บาท
              </div>
            </div>

            <div style={{marginRight: "133px" }}>
              <button onClick={handleConfirm} className="focus:outline-none">
                <Image
                  src="/buttonConfirm.png"
                  alt="Add to Cart"
                  width={289}
                  height={101}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
