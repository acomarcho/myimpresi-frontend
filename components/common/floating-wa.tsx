import Image from "next/image";

type Props = {
  customBottomHeight?: string;
};

import { sendWhatsappMessage, generalWhatsappMessage } from "@/utils/whatsapp";

const FloatingWAIcon = ({ customBottomHeight }: Props) => {
  return (
    <button
      onClick={() => sendWhatsappMessage(generalWhatsappMessage)}
      className="fixed right-[1.5rem] bottom-[1.5rem] lg:right-[3.75rem] lg:!bottom-[3.75rem] z-[30]"
      style={
        customBottomHeight
          ? {
              bottom: customBottomHeight,
            }
          : {}
      }
    >
      <Image
        src="/assets/icon-wa.png"
        width={72}
        height={72}
        className="w-[36px] h-[36px] lg:w-[72px] lg:h-[72px]"
        alt="WhatsApp"
      />
    </button>
  );
};

export default FloatingWAIcon;
