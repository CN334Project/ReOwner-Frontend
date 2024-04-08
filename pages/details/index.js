import Image from "next/image";
import Navbar from "../../components/navbar";


export default function Details() {
  const titleText = "GLOSTAD กลูสตอด";
  const originalText = `
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

  const mockupImage = "/mockup(sofa).png"
  const mockupPrice = "2990"

  function cutTextAndInsertNewLines(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }

    let result = "";
    let currentLength = 0;
    const words = text.split(" ");

    for (const word of words) {
      if (currentLength + word.length <= maxLength) {
        result += word + " ";
        currentLength += word.length;
      } else {
        result += "<br>" + word + " ";
        currentLength = word.length + 1; 
      }
    }

    return result.trim();
  }

  const maxLength = 110;
  const newText = cutTextAndInsertNewLines(originalText, maxLength);

  const detailsText = newText;

  const handleAddToCart = () => {
    console.log("Add to cart clicked");
  };

  return (
    <div>
      <Navbar />

      <div className="px-40 relative">
        <div className="relative">
          <Image src="/bgDetails.png" alt="bg" width={1197} height={453} />
          <div className="absolute inset-0 flex justify-center items-center">
            <Image src={mockupImage} alt="Your Image" width={536} height={536} />
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-black text-5xl font-bold leading-tight mb-4 fraunces-font">
            {titleText}
          </h1>

          <h3 className="text-black text-xl font-semibold mb-4 fraunces-font">
            รายละเอียดสินค้า
          </h3>

          <p className="text-black text-base mb-10 fraunces-font" dangerouslySetInnerHTML={{ __html: detailsText }}></p>

          <div className="flex justify-between items-center mb-10">
            <div className="relative">
              <Image src="/priceContainer.png" alt="bg" width={383} height={103} />
              <div className="absolute inset-0 flex justify-center items-center text-white text-5xl fraunces-font">
                {mockupPrice} บาท
              </div>
            </div>

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
    </div>
  );
}
