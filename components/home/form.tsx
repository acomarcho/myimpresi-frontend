import Heading from "./heading";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

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

type ToastProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  type: "success" | "error";
  message: string;
  durationInMs: number;
};

const Toast = ({
  isOpen,
  setIsOpen,
  type,
  message,
  durationInMs,
}: ToastProps) => {
  useEffect(() => {
    if (isOpen === true) {
      console.log("Membuka");

      const timeout = setTimeout(() => {
        console.log("Menutup");
        setIsOpen(false);
      }, durationInMs);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isOpen, setIsOpen, durationInMs]);

  return (
    <div
      className="fixed top-0 left-0 w-screen p-[1.25rem] transition-all"
      style={{
        backgroundColor: type === "success" ? "#229A16" : "#E52222",
        transform: isOpen ? "translateX(0%)" : "translateX(-100%)",
      }}
    >
      <p className="font-inter text-neutral-10 font-bold">{message}</p>
    </div>
  );
};

const defaultFormState = {
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
};

const Form = () => {
  const [formState, setFormState] = useState(defaultFormState);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"error" | "success">("success");

  return (
    <div className="p-[2rem] lg:p-[5rem] flex flex-col gap-[1.25rem] lg:gap-[2.5rem] items-center justify-center bg-primary-base">
      <div className="text-center">
        <Heading text="Kirimi saya penawaran ekslkusif, ide produk unik, dan dipersonalisasi tips berbelanja di Impresi." />
      </div>
      <form
        className="bg-neutral-10 p-[1.5rem] rounded-xl shadow-md w-full max-w-[1160px]"
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            await axios.post(
              `${process.env.NEXT_PUBLIC_BE_URL}/gsheet/contact`,
              {
                name: formState.name,
                email: formState.email,
                phone: formState.phoneNumber,
                city: formState.city,
              }
            );
            setToastType("success");
            setToastMessage("Pesan berhasil terkirim!");

            setFormState(defaultFormState);
          } catch (error) {
            setToastType("error");
            if (
              error &&
              typeof error === "object" &&
              "message" in error &&
              typeof error["message"] === "string"
            ) {
              setToastMessage(error.message);
            } else {
              setToastMessage("Gagal mengirimkan pesan! Silakan kontak admin.");
            }
          } finally {
            setIsToastOpen(true);
          }
        }}
      >
        <div className="grid grid-cols-1 grid-rows-4 gap-[1rem] lg:grid-cols-2 lg:grid-rows-2">
          <div className="flex flex-col items-start gap-[0.25rem]">
            <FormLabel htmlFor="name" text="Nama" required />
            <input
              type="text"
              name="name"
              className="p-[0.75rem] border-[1px] w-full rounded-xl border-netural-50 font-inter text-neutral-100"
              placeholder="Masukkan nama"
              required
              value={formState.name}
              onChange={(e) => {
                setFormState({ ...formState, name: e.currentTarget.value });
              }}
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
              value={formState.email}
              onChange={(e) => {
                setFormState({ ...formState, email: e.currentTarget.value });
              }}
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
                type="string"
                name="phone"
                className="p-[0.75rem] border-[1px] border-l-[0px] rounded-xl border-netural-50 font-inter text-neutral-100 w-[65%] lg:flex-1 rounded-tl-none rounded-bl-none"
                placeholder="823 4567 8910"
                required
                value={formState.phoneNumber}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    phoneNumber: e.currentTarget.value,
                  });
                }}
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
              value={formState.city}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  city: e.currentTarget.value,
                });
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-primary-default text-neutral-10 font-inter font-bold p-[0.75rem] w-full rounded-2xl mt-[2rem] transition-all hover:opacity-[0.9] disabled:opacity-[0.6]"
          disabled={
            !formState.email ||
            !formState.phoneNumber ||
            !formState.name ||
            isToastOpen
          }
        >
          Tolong Hubungi Saya
        </button>
      </form>
      <Toast
        type={toastType}
        isOpen={isToastOpen}
        setIsOpen={setIsToastOpen}
        message={toastMessage}
        durationInMs={3000}
      />
    </div>
  );
};

export default Form;
