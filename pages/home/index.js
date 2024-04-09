import Navbar from "../../components/navbar";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {

  const handleShopNow = () => {
    console.log("Add to cart clicked");
  };
  return (
    <div >
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: "140px", marginTop: "50px", }}>

        <div style={{}}>
          <p style={{ color: "#0E6E2E", fontWeight: "bold", fontFamily: "Fraunces, sans-serif", fontSize: "28px" }}>Secondhand goods for your</p>
          <p style={{ color: "Black", fontWeight: "bold", fontFamily: "Fraunces, sans-serif", fontSize: "96px" }}>All you<br />need<br />We have</p>
          <p style={{ color: "Black", fontWeight: "bold", fontFamily: "Fraunces, sans-serif", fontSize: "28px" }}>Search for secondhand items<br />you desire.</p>
        </div>

        <div style={{ marginLeft: "150px", }}>
          <Image src="/Pichome1.png" alt="bg" width={681} height={549} />
        </div>
      </div>

      <div style={{ marginLeft: "120px",marginTop: "30px" }}>
      <Link href="/shop">
        <button className="focus:outline-none" onClick={handleShopNow}>
          <Image
            src="/buttonShopNow.png"
            alt="Shop Now"
            width={289}
            height={101}
          />
        </button>
      </Link>
    </div>

    </div>
  );
}
