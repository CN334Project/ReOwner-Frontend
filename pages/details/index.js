import Image from "next/image";
import Navbar from "../../components/navbar";

export default function Details() {
  const titleText = "GLOSTAD กลูสตอด";
  const detailsText = `
  โซฟา GLOSTAD/กลูสตอด มีดีไซน์ที่เรียบง่ายและยังมอบความสะดวกสบายให้ ด้วยเบาะที่นั่งอย่างหนา ที่วางแขนบุแผ่นรอง\n
  และพนักพิงหลังแสนนุ่มที่จะเหมาะเจาะลงตัวกับเก้าอี้พอดี\n
  น้ำหนักที่เบาของโซฟาจะทำให้เคลื่อนย้ายได้ง่าย ไม่ว่าจะย้ายในบ้านหลังเดิมของคุณ หรือย้ายไปบ้านหลังใหม่\n
  ขาโลหะที่ทำมุมเล็กน้อยจะทำให้โซฟามั่นคง ในขณะเดียวกันก็โดดเด่นมีเอกลักษณ์ในตัวมันเอง\n
  ออกแบบมาให้คุณได้ประกอบได้ง่ายและรวดเร็วเพียงใช้สกรู 8 ตัว\n
  ถ้าเลือกหิ้วกลับบ้านเอง ก็เอากลับได้แสนง่าย บรรจุภัณฑ์มีความยาวประมาณ 115 ซม. กว้าง 65 ซม. และมีน้ำหนักน้อยกว่า 20 กก.\n
  การออกแบบจะทำให้เราได้ใช้วัสดุอย่างคุ้มค่ามากขึ้นในการผลิต ซึ่งส่งผลดีต่อโลก และช่วยให้เรารักษาราคาไว้ต่ำอีกด้วย\n
  โซฟาขนาดเล็กกะทัดรัด จัดวางเข้ากับบริเวณต่างๆ ในบ้านได้ง่าย แม้มีพื้นที่จำกัด\n
  ผ้าคลุมนี้ทำจากผ้าโพลีเอสเตอร์ KNISA/คนิสา ที่ใช้วิธีการฉีดสีเข้าเส้นด้าย ทำให้วัสดุคงทนและให้สัมผัสนุ่มสบาย
`;
const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "110px", marginRight: "133px" }}>
        <div>
          <Image src="/bgDetails.png" alt="bg" width={1197} height={453} />
        </div>
      </div>
      <div style={{ marginLeft: "131px", marginBottom: "69px" }}>
        <h1
          style={{
            color: "black",
            fontSize: "56.33px",
            fontFamily: "Fraunces, sans-serif",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          {titleText}
        </h1>
        <h3
          style={{
            color: "black",
            fontSize: 20,
            fontFamily: "Fraunces, sans-serif",
            fontWeight: "600",
            wordWrap: "break-word",
            marginTop: "14.16px",
            marginBottom: "20px",
          }}
        >
          รายละเอียดสินค้า
        </h3>
        <p
          style={{
            color: "black",
            fontSize: 20,
            fontFamily: "Fraunces, sans-serif",
            fontWeight: "300",
            wordWrap: "break-word",
            marginRight: "119px",
            marginBottom: "51px",
          }}
        >
          {detailsText}
        </p>
        <div
          className="flex items-center justify-between mr-20"
          style={{ marginRight: "133px" }}
        >
          <Image src="/priceContainer.png" alt="bg" width={383} height={103} />
          <button onClick={handleAddToCart} className="focus:outline-none">
            <Image
              src="/buttonAddtocart.png"
              alt="Add to Cart"
              width={289}
              height={101}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
