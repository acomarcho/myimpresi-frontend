import { Autocomplete, Menu, Drawer, Accordion } from "@mantine/core";
import {
  IconSearch,
  IconCaretDownFilled,
  IconMenu2,
} from "@tabler/icons-react";
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
            <Link href="/" className="font-inter text-neutral-60 font-bold">
              Home
            </Link>
            <Menu shadow="md" width={150}>
              <Menu.Target>
                <p className="font-inter text-neutral-60 font-bold cursor-pointer flex gap-[0.25rem] items-center">
                  Product <IconCaretDownFilled />
                </p>
              </Menu.Target>
              <Menu.Dropdown>
                {categories &&
                  categories.categories?.map((c) => {
                    return (
                      <Menu.Item key={c.id}>
                        <Link
                          href="/"
                          className="font-inter text-neutral-60 font-bold"
                        >
                          {c.name}
                        </Link>
                      </Menu.Item>
                    );
                  })}
              </Menu.Dropdown>
            </Menu>
            <Menu shadow="md" width={150}>
              <Menu.Target>
                <p className="font-inter text-neutral-60 font-bold cursor-pointer flex gap-[0.25rem] items-center">
                  Events <IconCaretDownFilled />
                </p>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <Link
                    href="/"
                    className="font-inter text-neutral-60 font-bold"
                  >
                    Seminar Kit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/"
                    className="font-inter text-neutral-60 font-bold"
                  >
                    Pameran Kit
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    href="/"
                    className="font-inter text-neutral-60 font-bold"
                  >
                    Rapat Formal
                  </Link>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </div>
      </div>
      {/* Mobile navbar */}
      <div className="lg:hidden w-screen fixed top-0 left-0 z-[100] bg-white">
        <div className="max-w-[1200px] mx-auto p-[1.5rem]">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/logo-impresi-blue.png"
              width={104}
              height={26}
              alt="Logo Impresi"
            />
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
            <Accordion>
              <Accordion.Item value="Produk">
                <Accordion.Control
                  styles={{
                    control: {
                      padding: "0.5rem 0",
                    },
                  }}
                >
                  Produk
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="flex flex-col gap-[1rem]">
                    {categories?.categories?.map((c) => {
                      return (
                        <Link key={c.id} href="/">
                          {c.name}
                        </Link>
                      );
                    })}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="Events">
                <Accordion.Control
                  styles={{
                    control: {
                      padding: "0.5rem 0",
                    },
                  }}
                >
                  Events
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="flex flex-col gap-[1rem]">
                    <Link href="/">Sample Event 1</Link>
                    <Link href="/">Sample Event 2</Link>
                    <Link href="/">Sample Event 3</Link>
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Kontak Kami
            </Link>
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Tentang Impresi
            </Link>
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter"
            >
              Kebijakan Impresi
            </Link>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
