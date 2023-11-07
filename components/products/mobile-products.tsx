import { IconAdjustments } from "@tabler/icons-react";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Drawer } from "@mantine/core";

type Props = {
  filterData: Category[];
  products: Product[];
};

type Category = {
  id: number;
  name: string;
  subcategories: Subcategory[];
};

type Subcategory = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  imagePath: string;
  name: string;
  price: number;
  minQuantity: number;
  soldAmount: number;
};

const MobileProducts = ({ filterData, products }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="relative lg:hidden mt-[2rem]">
      <button
        className="sticky top-[8.5rem] z-[10] bg-gray p-[0.5rem] rounded-full shadow-md transition-all hover:scale-[1.2]"
        onClick={() => open()}
      >
        <IconAdjustments />
      </button>
      <div className="grid grid-cols-2 gap-[0.5rem] mt-[1rem]">
        {products.map((p) => {
          return (
            <Link
              key={p.id}
              className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative block"
              href={`/product/${p.id}`}
            >
              <Image
                src={p.imagePath}
                width={280}
                height={280}
                alt={p.name}
                className="object-cover"
              />
              <div className="p-[0.75rem]">
                <p className="font-inter font-bold">{p.name.toUpperCase()}</p>
                <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum numquam reprehenderit et, earum deleniti nostrum tempore
                  enim nihil corporis optio!
                </p>
                <div className="flex justify-between items-center mt-[0.5rem]">
                  <p className="font-inter font-bold text-neutral-100 text-[0.8rem] lg:text-[1rem]">
                    {formatToRupiah(p.price)}
                  </p>
                  <button className="transition-all hover:scale-[1.2]">
                    <Image
                      src="/assets/heart.svg"
                      width={16}
                      height={16}
                      alt="Add to wishlist"
                    />
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
        <Drawer opened={opened} onClose={close} position="bottom" size="80%">
          <div className="flex flex-col">
            <p className="font-inter font-bold text-neutral-100">
              Semua Kategori
            </p>
            <hr className="text-neutral-20 mt-[0.5rem]" />
            <Accordion
              styles={{
                control: {
                  border: "none",
                },
                item: {
                  border: "none",
                },
              }}
            >
              {filterData.map((d) => {
                return (
                  <Accordion.Item key={d.id} value={d.name}>
                    <Accordion.Control>
                      <p className="font-bold font-inter text-neutral-100">
                        {d.name}
                      </p>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <div className="flex flex-col gap-[0.5rem]">
                        {d.subcategories.map((s) => {
                          return (
                            <Link
                              href="/product"
                              key={s.id}
                              className="font-inter text-neutral-100 transition-all hover:pl-[0.5rem]"
                            >
                              {s.name}
                            </Link>
                          );
                        })}
                      </div>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileProducts;
