import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="font-fraunces text-black px-4 py-2">
      <style jsx global>{`
        @font-face {
          font-family: 'Fraunces';
          src: url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;700&display=swap');
        }
        
        .font-fraunces {
          font-family: 'Fraunces', sans-serif;
        }

        .font-regular {
          font-weight: 400;
        }
      `}</style>
      <div className="flex items-center justify-between" style={{ marginLeft: "80px", marginRight: "133px" }}>
        <div className="flex items-center space-x-10">
          <Image src="/Logo.png" alt="Logo" width={238} height={110} />
          <a href="/" className="text-lg font-regular font-fraunces hover:underline">Home</a>
          <a href="/shop" className="text-lg font-regular font-fraunces hover:underline">Shop</a>
        </div>
        <div className="flex items-center">
          <Image src="/CartIcon.png" alt="Icon" width={70} height={70} />
        </div>
      </div>
    </nav>
  );
}
