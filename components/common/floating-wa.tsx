import Image from "next/image";

const FloatingWAIcon = () => {
  return (
    <a
      href="https:/wa.me"
      target="_blank"
      rel="noreferrer"
      className="fixed right-[1.5rem] bottom-[1.5rem] lg:right-[3.75rem] lg:bottom-[3.75rem]"
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
