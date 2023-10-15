type Props = {
  text: string;
};

export default function Subheading({ text }: Props) {
  return (
    <p className="font-inter text-neutral-60 text-[1rem] lg:text-[1.125rem]">
      {text}
    </p>
  );
}
