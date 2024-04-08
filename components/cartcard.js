import Image from "next/image";

export default function CartCard({ data }) {
  const { id, photo, name, details, price } = data;

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
              <Image src={photo} alt="ProductPhoto" width={250} height={250} />
            </div>
            <div className="ml-5">
              <div className="text-4xl font-bold mb-2 fraunces-font">
                {name}
              </div>
              <div>{details}</div>
            </div>
            <div className="absolute top-4 right-4 mt-16 mr-14 flex flex-col items-end">
              <div className="text-3xl font-medium fraunces-font">
                {price} บาท
              </div>
              <div style={{ marginTop: "80px" }}>
                <Image
                  src="/buttonDeleteCart.png"
                  alt="DeleteCart"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
