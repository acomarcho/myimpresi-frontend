import Image from "next/image";

type Props = {
  imagePath: string;
  name: string;
};

const Event = ({ imagePath, name }: Props) => {
  return (
    <>
      <Image
        src={imagePath}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full object-cover"
        alt={name}
      />
      <p className="font-inter font-bold text-[1rem] lg:text-[1.25rem] text-neutral-10 absolute left-[0.5rem] bottom-[0.5rem] lg:left-[1.5rem] lg:bottom-[1.5rem]">
        {name}
      </p>
    </>
  );
};

export default Event;
