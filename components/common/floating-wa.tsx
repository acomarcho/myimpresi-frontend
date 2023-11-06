import Image from "next/image";

type Props = {
  customBottomHeight?: string;
};

const FloatingWAIcon = ({ customBottomHeight }: Props) => {
  return (
    <a
      href="https:/wa.me"
      target="_blank"
      rel="noreferrer"
      className="fixed right-[1.5rem] bottom-[1.5rem] lg:right-[3.75rem] lg:!bottom-[3.75rem]"
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
    </a>
  );
};

export default FloatingWAIcon;
