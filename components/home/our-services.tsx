import Heading from "./heading";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";

const OurServices = () => {
  return (
    <div className="mb-[2rem]">
      <Heading text="Layanan Kami Meliputi" />
      <ScrollContainer className="flex gap-[2rem] mt-[2rem] lg:grid lg:grid-cols-3">
        <div className="flex-shrink-0 w-[80%] lg:w-[100%]">
          <Image
            src="/assets/layanan-1.png"
            width={389}
            height={341}
            className="w-full"
            alt=""
          />
          <div className="mt-[0.5rem] bg-serviceorange-500 p-[2rem] flex justify-between items-center gap-[2rem] lg:h-[221px]">
            <Image
              src="/assets/icon-chat.png"
              width={78}
              height={81}
              alt=""
              className="w-[10%] lg:w-[20%] lg:max-w-[78px]"
            />
            <div className="flex flex-col gap-[0.5rem] h-[235px] lg:h-auto justify-center">
              <p className="text-neutral-10 font-bold text-[1.25rem] lg:text-[1.5rem]">
                Beritahu kami kebutuhanmu
              </p>
              <p className="text-neutral-10">
                agar kami dapat memberi rekomendasi yang tepat
              </p>
            </div>
          </div>
          <div className="mt-[0.5rem] bg-serviceorange-300 p-[2rem] h-[220px] lg:h-auto flex items-center">
            <p className="font-inter text-serviceorange-900 font-bold">
              Tim Impresi senang membantu menyelesaikan kebutuhan souvenir yang
              terkadang merepotkanmu
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 w-[80%] lg:w-[100%]">
          <Image
            src="/assets/layanan-2.png"
            width={389}
            height={341}
            className="w-full"
            alt=""
          />
          <div className="mt-[0.5rem] bg-servicered-500 p-[2rem] flex justify-between items-center gap-[2rem] lg:h-[221px]">
            <Image
              src="/assets/icon-chat.png"
              width={78}
              height={81}
              alt=""
              className="w-[10%] lg:w-[20%] lg:max-w-[78px]"
            />
            <div className="flex flex-col gap-[0.5rem] h-[235px] lg:h-auto justify-center">
              <p className="text-neutral-10 font-bold text-[1.25rem] lg:text-[1.5rem]">
                Bebas biaya sample
              </p>
              <p className="text-neutral-10">
                tidak perlu khawatir lagi untuk melihat contoh produkmu
              </p>
            </div>
          </div>
          <div className="mt-[0.5rem] bg-servicered-300 p-[2rem] h-[220px] lg:h-auto flex items-center">
            <p className="font-inter text-servicered-900 font-bold">
              Tim Impresi ingin memastikan kamu mendapat produk yang sesuai
              seperti yang kamu inginkan
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 w-[80%] lg:w-[100%]">
          <Image
            src="/assets/layanan-2.png"
            width={389}
            height={341}
            className="w-full"
            alt=""
          />
          <div className="mt-[0.5rem] bg-servicegreen-500 p-[2rem] flex justify-between items-center gap-[2rem] lg:h-[221px]">
            <Image
              src="/assets/icon-chat.png"
              width={78}
              height={81}
              alt=""
              className="w-[15%] lg:w-[20%] lg:max-w-[78px]"
            />
            <div className="flex flex-col gap-[0.5rem] h-[235px] lg:h-auto justify-center">
              <p className="text-neutral-10 font-bold text-[1.25rem] lg:text-[1.5rem]">
                Pengaturan pengantaran
              </p>
              <p className="text-neutral-10">
                pengantaran dalam jumlah besar atau satu-satu ke alamat tertentu
              </p>
            </div>
          </div>
          <div className="mt-[0.5rem] bg-servicegreen-300 p-[2rem] h-[220px] lg:h-auto flex items-center">
            <p className="font-inter text-servicegreen-900 font-bold">
              Tim Impresi ingin memastikan souvenir sampai dengan baik dan dalam
              keadaan yang prima
            </p>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default OurServices;
