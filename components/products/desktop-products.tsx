import { Accordion } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { Category } from "@/types/responses";

type Props = {
  filterData: Category[] | undefined;
  products: Product[];
};

type Product = {
  id: number;
  imagePath: string;
  name: string;
  price: number;
  minQuantity: number;
  soldAmount: number;
};

const DesktopProducts = ({ filterData, products }: Props) => {
  return (
    <div className="hidden items-start gap-[1rem] mt-[2rem] relative hidden lg:flex">
      {/* Sidebar */}
      <div className="w-[10rem] sticky top-[10rem] flex-shrink-0">
        <p className="font-inter font-bold text-neutral-100">Semua Kategori</p>
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
          {filterData?.map((d) => {
            return (
              <Accordion.Item key={d.id} value={d.name}>
                <Accordion.Control>
                  <p className="font-bold font-inter text-neutral-100">
                    {d.name}
                  </p>
                </Accordion.Control>
                <Accordion.Panel>
                  <div className="flex flex-col gap-[1rem]">
                    {d.subcategory.map((s) => {
                      return (
                        <Link
                          href={`/product?subcategoryId=${s.id}`}
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
      {/* Products */}
      <div className="grid grid-cols-4 gap-[1rem]">
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
                  <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
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
      </div>
    </div>
  );
};

export default DesktopProducts;
