import { Autocomplete, Menu } from "@mantine/core";
import { IconSearch, IconCaretDownFilled } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import useCategories from "@/hooks/use-categories";
import { useDebouncedValue } from "@mantine/hooks";
import { useState, useEffect } from "react";

type AutocompleteData = {
  name: string;
};

const Navbar = () => {
  const { categories } = useCategories();
  const [search, setSearch] = useState("");
  const [autocomplete, setAutocomplete] = useState<AutocompleteData[]>([]);
  const [debouncedSearch] = useDebouncedValue(search, 200);

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
    <div className="w-screen fixed top-0 left-0 z-[100] bg-white shadow-md">
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
                borderRadius: "100px",
                paddingTop: "0.25rem",
                paddingBottom: "0.25rem",
                height: "auto",
                paddingLeft: "2.75rem",
                fontFamily: "var(--font-inter)",
                color: "var(--neutral-100)",
                fontSize: "1rem",
              },
            }}
            placeholder="Mau cari produk apa...?"
            data={autocomplete.map((a) => {
              return a.name;
            })}
          />
          <Link href="/" className="transition-all hover:scale-[1.05]">
            <Image src="/assets/heart.svg" width={28} height={32} alt="Love" />
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
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Seminar Kit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Pameran Kit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/" className="font-inter text-neutral-60 font-bold">
                  Rapat Formal
                </Link>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
