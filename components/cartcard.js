import Image from "next/image";
import axios from "axios";

export default function CartCard({ item }) {
  // const {  } = data;
  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.patch("http://localhost:3005/cart/remove", {
        productId: productId,
      });
      window.location.reload();
      console.log("Product removed from cart:", response.data.message);
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  return (
    <div className="mt-16 mb-12 relative" style={{ marginRight: "84px" }}>
      <div className="relative">
        <Image
          src="/bgCartCard.png"
          alt="bg"
          layout="responsive"
          width={1181}
          height={394}
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4">
          <div className="flex items-center">
            <div className="ml-9">
              <img
                src={item.product.image}
                alt="ProductPhoto"
                width={250}
                height={250}
              />
            </div>
            <div className="ml-5">
              <div className="text-4xl font-bold mb-2 fraunces-font">
                {item.product.name}
              </div>
              <div>{item.product.shortdescription}</div>
            </div>
            <div className="absolute top-4 right-4 mt-16 mr-14 flex flex-col items-end">
              <div className="text-3xl font-medium fraunces-font">
                {item.product.price} บาท
              </div>

              <div style={{ marginTop: "80px" }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemoveFromCart(item.product._id);
                  }}
                >
                  <Image
                    src="/buttonDeleteCart.png"
                    alt="DeleteCart"
                    width={70}
                    height={70}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
