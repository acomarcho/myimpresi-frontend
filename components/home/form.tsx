import Heading from "./heading";
import Image from "next/image";

type FormLabelProps = {
  htmlFor: string;
  text: string;
  required?: boolean;
};

const FormLabel = ({ htmlFor, text, required }: FormLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className="font-inter font-bold text-[1rem] text-neutral-70"
    >
      {text} {required && <span className="text-red">*</span>}
    </label>
  );
};

const Form = () => {
  return (
    <div className="p-[2rem] lg:p-[5rem] flex flex-col gap-[1.25rem] lg:gap-[2.5rem] items-center justify-center bg-primary-base">
      <div className="text-center">
        <Heading text="Kirimi saya penawaran ekslkusif, ide produk unik, dan dipersonalisasi tips berbelanja di Impresi." />
      </div>
      <form className="bg-neutral-10 p-[1.5rem] rounded-xl shadow-md w-full max-w-[1160px]">
        <div className="grid grid-cols-1 grid-rows-4 gap-[1rem] lg:grid-cols-2 lg:grid-rows-2">
          <div className="flex flex-col items-start gap-[0.25rem]">
            <FormLabel htmlFor="name" text="Nama" required />
            <input
              type="text"
              name="name"
              className="p-[0.75rem] border-[1px] w-full rounded-xl border-netural-50 font-inter text-neutral-100"
              placeholder="Masukkan nama"
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="email" text="Email" required />
            <input
              type="email"
              name="email"
              className="p-[0.75rem] border-[1px] w-full rounded-xl border-netural-50 font-inter text-neutral-100"
              placeholder="Masukkan email"
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="phone" text="Nomor HP" required />
            <div className="flex">
              <div className="flex p-[0.75rem] border-[1px] rounded-xl border-netural-50 font-inter text-neutral-100 gap-[0.25rem] flex-shrink-0 w-[35%] lg:w-auto rounded-tr-none rounded-br-none">
                <Image
                  src="/assets/indonesia.svg"
                  width={20}
                  height={14}
                  alt="Indonesia"
                />
                <p className="font-inter text-neutral-100">+62</p>
              </div>
              <input
                type="phone"
                name="phone"
                className="p-[0.75rem] border-[1px] border-l-[0px] rounded-xl border-netural-50 font-inter text-neutral-100 w-[65%] lg:flex-1 rounded-tl-none rounded-bl-none"
                placeholder="823 4567 8910"
                required
              />
            </div>
          </div>
          <div>
            <FormLabel htmlFor="city" text="Kota" />
            <input
              type="text"
              name="city"
              className="p-[0.75rem] border-[1px] w-full rounded-xl border-netural-50 font-inter text-neutral-100"
              placeholder="Masukkan kota"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary-default text-neutral-10 font-inter font-bold p-[0.75rem] w-full rounded-2xl mt-[2rem] transition-all hover:opacity-[0.9]"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Tolong Hubungi Saya
        </button>
      </form>
    </div>
  );
};

export default Form;
