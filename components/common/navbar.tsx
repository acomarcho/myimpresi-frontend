import { Autocomplete, Drawer } from "@mantine/core";
import { IconSearch, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import useCategories from "@/hooks/use-categories";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { useState, useEffect } from "react";

type AutocompleteData = {
  name: string;
};

const Navbar = () => {
  const { categories } = useCategories();
  const [search, setSearch] = useState("");
  const [autocomplete, setAutocomplete] = useState<AutocompleteData[]>([]);
  const [debouncedSearch] = useDebouncedValue(search, 500);
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    if (debouncedSearch.length >= 2) {
      setAutocomplete(
        categories?.categories?.map((c) => {
          return {
            name: c.name,
          };
        }) || []
      );
    } else {
      setAutocomplete([]);
    }
  }, [debouncedSearch, setAutocomplete, categories]);

  return (
    <>
      {/* Desktop navbar */}
      <div className="hidden lg:block w-screen fixed top-0 left-0 z-[100] bg-white">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <div className="grid grid-cols-[auto_1fr_auto] gap-[2rem] items-center">
            <Link href="/">
              <Image
                src="/assets/logo-impresi-blue.png"
                width={132}
                height={33}
                alt="Logo MyImpresi"
              />
            </Link>
            <Autocomplete
              value={search}
              onChange={(e) => {
                setSearch(e);
              }}
              leftSection={<IconSearch size={16} stroke={4} />}
              styles={{
                section: {
                  paddingLeft: "1rem",
                },
                input: {
                  border: "none",
                  borderRadius: "100px",
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                  height: "auto",
                  paddingLeft: "2.75rem",
                  fontFamily: "var(--font-inter)",
                  color: "var(--neutral-100)",
                  fontSize: "1rem",
                  background: "#ECECECB2",
                },
                option: {
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color: "var(--neutral-100)",
                  padding: "0.5rem 1rem",
                },
                options: {
                  padding: 0,
                  background: "#ECECECFF",
                },
                dropdown: {
                  padding: 0,
                  background: "#ECECECFF",
                  borderRadius: "100px",
                },
              }}
              placeholder={`Coba "Jam Dinding" ...`}
              data={autocomplete.map((a) => {
                return a.name;
              })}
            />
            <Link
              href="/wishlist"
              className="transition-all hover:scale-[1.05]"
            >
              <Image
                src="/assets/heart.svg"
                width={28}
                height={32}
                alt="Love"
              />
            </Link>
          </div>
          <div className="flex gap-[2rem] mt-[1.5rem]">
            <Link
              href="/product"
              className="font-inter text-neutral-100 font-bold"
            >
              Produk
            </Link>
            <Link href="/" className="font-inter text-neutral-100 font-bold">
              Acara
            </Link>
            <Link href="/" className="font-inter text-neutral-100 font-bold">
              Artikel
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div className="lg:hidden w-screen fixed top-0 left-0 z-[100] bg-white">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/assets/logo-impresi-blue.png"
                width={104}
                height={26}
                alt="Logo Impresi"
              />
            </Link>

            <div className="flex gap-[1.25rem] items-center">
              <Link href="/wishlist">
                <Image
                  src="/assets/heart.svg"
                  width={25}
                  height={25}
                  alt="Wishlist"
                />
              </Link>
              <button onClick={open}>
                <IconMenu2 size={25} />
              </button>
            </div>
          </div>
          <div className="mt-[1rem]">
            <Autocomplete
              value={search}
              onChange={(e) => {
                setSearch(e);
              }}
              leftSection={<IconSearch size={16} stroke={4} />}
              styles={{
                section: {
                  paddingLeft: "1rem",
                },
                input: {
                  border: "none",
                  borderRadius: "100px",
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                  height: "auto",
                  paddingLeft: "2.75rem",
                  fontFamily: "var(--font-inter)",
                  color: "var(--neutral-100)",
                  fontSize: "1rem",
                  background: "#ECECECB2",
                },
                option: {
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  color: "var(--neutral-100)",
                  padding: "0.5rem 1rem",
                },
                options: {
                  padding: 0,
                  background: "#ECECECFF",
                },
                dropdown: {
                  padding: 0,
                  background: "#ECECECFF",
                  borderRadius: "100px",
                },
              }}
              placeholder={`Coba "Jam Dinding" ...`}
              data={autocomplete.map((a) => {
                return a.name;
              })}
            />
          </div>
        </div>
        <Drawer opened={opened} onClose={close} position="bottom" size="80%">
          <div className="flex flex-col">
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Produk
            </Link>
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Acara
            </Link>
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Artikel
            </Link>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
