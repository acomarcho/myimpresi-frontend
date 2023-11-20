import {
  Autocomplete,
  ComboboxItem,
  Drawer,
  OptionsFilter,
} from "@mantine/core";
import { IconSearch, IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import useCategories from "@/hooks/use-categories";
import useProducts from "@/hooks/use-products";
import { useDebouncedValue, useDisclosure } from "@mantine/hooks";
import { useState, useEffect, useRef } from "react";

import { useAppSelector } from "@/hooks/use-redux";

import { FindProductsFilter } from "@/types/requests";
import { Subcategory } from "@/types/responses/subcategory";

import { useRouter } from "next/router";
import Router from "next/router";
import _ from "lodash";

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter(
    (option) =>
      option.label.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
      option.label === "Semua Produk"
  );

  return filtered;
};

const customPlaceholders = [
  `Coba "Jam" ...`,
  `Coba "Peralatan Minum" ...`,
  `Coba "Payung" ...`,
  `Coba "Peralatan Kantor" ...`,
  `Coba "Stationery" ...`,
  `Coba "Tumblr" ...`,
  `Coba "Jam Dinding" ...`,
  `Coba "PIN" ...`,
  `Coba "Lanyard" ...`,
  `Coba "USB" ...`,
];

type AutocompleteData = {
  name: string;
};

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [autocomplete, setAutocomplete] = useState<AutocompleteData[]>([]);
  const [debouncedSearch] = useDebouncedValue(search, 500);
  const [opened, { open, close }] = useDisclosure(false);
  const [filter, setFilter] = useState<FindProductsFilter>({
    page: 1,
    pageSize: 20,
    search: "",
  });
  const [searchPlaceholder, setSearchPlaceholder] = useState(
    customPlaceholders[0]
  );

  useEffect(() => {
    setSearchPlaceholder(_.sample(customPlaceholders)!);
  }, []);

  const { products } = useProducts(filter);
  const { categories } = useCategories();

  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const wishlistProducts = useAppSelector(
    (state) => state.wishlist.wishlistProducts
  );

  useEffect(() => {
    if (debouncedSearch.length >= 2) {
      setFilter((f) => {
        return {
          ...f,
          search: debouncedSearch,
        };
      });
    } else {
      setAutocomplete([]);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    const { search } = router.query;

    if (typeof search === "string") {
      if (search) {
        setSearch(search);
      }
    }

    if (!search) {
      setSearch("");
    }
  }, [router.query]);

  useEffect(() => {
    const uniqueNames = Array.from(
      new Set(products?.map((p) => p.name.toUpperCase()) || [])
    );

    const matchingCategories = categories?.categories.filter((c) =>
      c.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    const categoriesWithMatchingSubcategories = categories?.categories.filter(
      (c) =>
        c.subcategory.find((s) =>
          s.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    );
    const matchingSubcategories: Subcategory[] = [];
    categoriesWithMatchingSubcategories?.forEach((c) => {
      c.subcategory.forEach((s) => {
        if (s.name.toLowerCase().includes(debouncedSearch.toLowerCase())) {
          matchingSubcategories.push(s);
        }
      });
    });

    let newAutocomplete = [
      ...uniqueNames.slice(0, 5).map((n) => {
        return {
          name: n,
        };
      }),
      ...matchingSubcategories.map((s) => {
        return {
          name: s.name,
        };
      }),
    ];
    if (matchingCategories) {
      newAutocomplete = [
        ...newAutocomplete,
        ...matchingCategories.map((c) => {
          return {
            name: c.name,
          };
        }),
      ];
    }

    if (debouncedSearch.length >= 2) {
      setAutocomplete(newAutocomplete);
    } else {
      setAutocomplete([]);
    }
  }, [products, categories, debouncedSearch]);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && search) {
        if (search.toLowerCase() === "semua produk") {
          Router.push(`/product/`);
        } else {
          Router.push(`/product/?search=${search}`);
        }

        if (desktopInputElement) {
          desktopInputElement.blur();
        }

        if (mobileInputElement) {
          mobileInputElement.blur();
        }
      }
    };

    if (search.length < 2) {
      setAutocomplete([]);
    }

    const desktopInputElement = desktopInputRef.current;
    if (desktopInputElement) {
      desktopInputElement.addEventListener("keydown", handleKeydown);
    }

    const mobileInputElement = mobileInputRef.current;
    if (mobileInputElement) {
      mobileInputElement.addEventListener("keydown", handleKeydown);
    }

    return () => {
      if (desktopInputElement) {
        desktopInputElement.removeEventListener("keydown", handleKeydown);
      }

      if (mobileInputElement) {
        mobileInputElement.removeEventListener("keydown", handleKeydown);
      }
    };
  }, [search]);

  const wishlistAmount =
    wishlistProducts.length < 10 ? `${wishlistProducts.length}` : "9+";

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
            <div className="flex gap-[1rem]">
              <Autocomplete
                value={search}
                onChange={(e) => {
                  setSearch(e);
                }}
                styles={{
                  input: {
                    border: "none",
                    borderRadius: "100px",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    height: "auto",
                    paddingLeft: "1rem",
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
                placeholder={searchPlaceholder}
                data={
                  (debouncedSearch.length >= 2 && [
                    ...autocomplete.map((a) => {
                      return a.name;
                    }),
                    "Semua Produk",
                  ]) ||
                  []
                }
                className="w-full"
                ref={desktopInputRef}
                filter={optionsFilter}
              />
              {search !== "" && (
                <Link
                  href={
                    search.toLowerCase() === "semua produk"
                      ? `/product/`
                      : `/product/?search=${search}`
                  }
                  className="grid place-items-center bg-primary-default px-[1rem] rounded-full"
                >
                  <IconSearch size={16} color={"#ffffff"} />
                </Link>
              )}
            </div>

            <Link
              href="/wishlist"
              className="transition-all hover:scale-[1.05] relative"
            >
              <Image
                src="/assets/heart.svg"
                width={28}
                height={32}
                alt="Wishlist"
              />
              <p className="font-inter text-neutral-10 rounded-full absolute top-[-0.5rem] right-[-0.5rem] bg-red h-[1.25rem] w-[1.25rem] grid place-items-center text-[0.75rem] font-bold">
                {wishlistAmount}
              </p>
            </Link>
          </div>
          <div className="flex gap-[2rem] mt-[1.5rem]">
            <Link href="/" className="font-inter text-neutral-100 font-bold">
              Home
            </Link>
            <Link
              href="/product"
              className="font-inter text-neutral-100 font-bold"
            >
              Produk
            </Link>
            <Link href="/" className="font-inter text-neutral-100 font-bold">
              Acara
            </Link>
            <Link
              href="/article"
              className="font-inter text-neutral-100 font-bold"
            >
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
              <Link
                href="/wishlist"
                className="transition-all hover:scale-[1.05] relative"
              >
                <Image
                  src="/assets/heart.svg"
                  width={25}
                  height={25}
                  alt="Wishlist"
                />
                <p className="font-inter text-neutral-10 rounded-full absolute top-[-0.5rem] right-[-0.5rem] bg-red h-[1.25rem] w-[1.25rem] grid place-items-center text-[0.6rem] font-bold">
                  {wishlistAmount}
                </p>
              </Link>
              <button onClick={open}>
                <IconMenu2 size={25} />
              </button>
            </div>
          </div>
          <div className="mt-[1rem]">
            <div className="flex gap-[1rem]">
              <Autocomplete
                value={search}
                onChange={(e) => {
                  setSearch(e);
                }}
                styles={{
                  input: {
                    border: "none",
                    borderRadius: "100px",
                    paddingTop: "0.25rem",
                    paddingBottom: "0.25rem",
                    height: "auto",
                    paddingLeft: "1rem",
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
                placeholder={searchPlaceholder}
                data={autocomplete.map((a) => {
                  return a.name;
                })}
                className="w-full"
                ref={mobileInputRef}
              />{" "}
              {search !== "" && (
                <Link
                  href={
                    search.toLowerCase() === "semua produk"
                      ? `/product/`
                      : `/product/?search=${search}`
                  }
                  className="grid place-items-center bg-primary-default px-[1rem] rounded-full"
                >
                  <IconSearch size={16} color={"#ffffff"} />
                </Link>
              )}
            </div>
          </div>
        </div>
        <Drawer opened={opened} onClose={close} position="bottom" size="80%">
          <div className="flex flex-col">
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter font-bold"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter font-bold"
            >
              Produk
            </Link>
            <Link
              href="/"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter font-bold"
            >
              Acara
            </Link>
            <Link
              href="/article"
              className="py-[1rem] border-b-[1px] border-neutral-20 font-inter font-bold"
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
