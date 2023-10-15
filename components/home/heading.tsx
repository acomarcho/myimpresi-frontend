type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return (
    <h1 className="font-inter font-bold text-neutral-100 text-[1.25rem] lg:text-[1.5rem]">
      {text}
    </h1>
  );
}
