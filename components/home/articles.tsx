import Image from "next/image";
import Heading from "./heading";

const Articles = () => {
  return (
    <div>
      <Heading text="Temukan Inspirasi Produk yang Cocok" />
      <div className="mt-[2rem] grid inspiration-grid-mobile lg:inspiration-grid-desktop gap-[1rem] lg:gap-[2rem]">
        <div className="grid-ins1 relative cursor-pointer transition-all hover:scale-[1.05]">
          <Image
            src="/assets/inspo-1.png"
            fill
            className="object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
            <p className="font-inter font-bold text-neutral-100">
              Rekomendasi event luar ruangan
            </p>
            <p className="font-inter text-neutral-100">Cek sekarang!</p>
          </div>
        </div>
        <div className="grid-ins2 relative cursor-pointer transition-all hover:scale-[1.05]">
          <Image
            src="/assets/inspo-2.png"
            fill
            className="object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
            <p className="font-inter font-bold text-neutral-100">
              Sambut karyawan baru dengan OfficeKit
            </p>
            <p className="font-inter text-neutral-100">Cek sekarang!</p>
          </div>
        </div>
        <div className="grid-ins3 relative cursor-pointer transition-all hover:scale-[1.05]">
          <Image
            src="/assets/inspo-3.png"
            fill
            className="object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
            <p className="font-inter font-bold text-neutral-100">
              Menyambut musim hujan yang dirindukan
            </p>
            <p className="font-inter text-neutral-100">Cek sekarang!</p>
          </div>
        </div>
        <div className="grid-ins4 relative cursor-pointer transition-all hover:scale-[1.05]">
          <Image
            src="/assets/inspo-4.png"
            fill
            className="object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0 bg-whitetransparent p-[1rem] w-full">
            <p className="font-inter font-bold text-neutral-100">
              Menyambut musim hujan yang dirindukan
            </p>
            <p className="font-inter text-neutral-100">Cek sekarang!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
