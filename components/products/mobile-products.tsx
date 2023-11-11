import { IconAdjustments } from "@tabler/icons-react";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Drawer } from "@mantine/core";
import { Category } from "@/types/responses";
import { ProductWithImages } from "@/types/responses/product";

type Props = {
  changeSubcategoryId: (subcategoryId: string) => void;
  filterData: Category[] | undefined;
  products: ProductWithImages[] | undefined;
};

const MobileProducts = ({
  changeSubcategoryId,
  filterData,
  products,
}: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="relative lg:hidden mt-[2rem]">
      <button
        className="sticky top-[8.5rem] z-[10] bg-gray p-[0.5rem] rounded-full shadow-md transition-all hover:scale-[1.2]"
        onClick={() => open()}
      >
        <IconAdjustments />
      </button>
      <div className="grid grid-cols-2 gap-[1rem] mt-[1rem]">
        {products?.map((p) => {
          return (
            <Link
              key={p.id}
              className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative block"
              href={`/product/${p.id}`}
            >
              <Image
                src={p.productImage[0].path}
                width={280}
                height={280}
                alt={p.name}
                className="w-full h-[200px] lg:h-[250px] object-cover"
              />
              <div className="p-[0.75rem]">
                <p className="font-inter font-bold">{p.name.toUpperCase()}</p>
                <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two h-[44px]">
                  {`${p.material}, ${p.size}`}
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
                            <div
                              key={s.id}
                              className="font-inter text-neutral-100 transition-all hover:pl-[0.5rem] cursor-pointer"
                              onClick={() => changeSubcategoryId(s.id)}
                            >
                              {s.name}
                            </div>
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
