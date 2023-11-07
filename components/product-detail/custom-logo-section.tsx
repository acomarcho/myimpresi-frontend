import Heading from "../home/heading";
import Image from "next/image";

const CustomLogoSection = () => {
  return (
    <div className="mt-[2rem] flex flex-col lg:flex-row justify-between items-start gap-[2rem] lg:justify-start">
      <Image
        src="/assets/paint-palette.png"
        width={142}
        height={142}
        alt=""
        className="flex-shrink-0"
      />
      <div>
        <Heading text="Gratis custom logomu pada seluruh produk!" />
        <p className="mt-[0.5rem] font-inter text-neutral-60">
          Harga seluruh produk sudah termasuk biaya custom
        </p>
      </div>
    </div>
  );
};

export default CustomLogoSection;
