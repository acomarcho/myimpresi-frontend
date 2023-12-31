import { IconAdjustments, IconZoomExclamation } from "@tabler/icons-react";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Accordion, Drawer } from "@mantine/core";
import { Category } from "@/types/responses";
import { ProductWithImages } from "@/types/responses/product";
import { FindProductsFilter } from "@/types/requests";
import { colors } from "@/utils/colors";

import { addProduct, removeProduct } from "@/redux/slices/wishlist-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/use-redux";
import { generalWhatsappMessage, sendWhatsappMessage } from "@/utils/whatsapp";

import { Skeleton } from "@mantine/core";
import { dummyProducts } from "@/utils/dummy-products";

type Props = {
  filter: FindProductsFilter;
  changeSubcategoryId: (subcategoryId: string) => void;
  filterData: Category[] | undefined;
  products: ProductWithImages[] | undefined;
  isLoading: boolean;
};

const MobileProducts = ({
  filter,
  changeSubcategoryId,
  filterData,
  products,
  isLoading,
}: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  const wishlistProducts = useAppSelector(
    (state) => state.wishlist.wishlistProducts
  );
  const dispatch = useAppDispatch();

  const renderedProducts = isLoading ? dummyProducts : products;

  return (
    <div className="relative lg:hidden mt-[2rem]">
      <button
        className="sticky top-[8.5rem] z-[10] bg-gray p-[0.5rem] rounded-full shadow-md transition-all hover:scale-[1.2]"
        onClick={() => open()}
      >
        <IconAdjustments />
      </button>
      {renderedProducts && renderedProducts.length > 0 && (
        <div className="grid grid-cols-2 gap-[1rem] mt-[1rem]">
          {renderedProducts?.map((p) => {
            return (
              <Link
                key={p.id}
                className="bg-neutral-10 transition-all cursor-pointer hover:scale-[1.05] relative block"
                href={`/product/${p.id}`}
              >
                <Skeleton visible={isLoading}>
                  <Image
                    src={p.productImage[0].path}
                    width={280}
                    height={280}
                    alt={p.name}
                    className="w-full h-[200px] lg:h-[250px] object-cover"
                  />
                </Skeleton>
                <Skeleton visible={isLoading}>
                  <div className="p-[0.75rem]">
                    <p className="font-inter font-bold">
                      {p.name.toUpperCase()}
                    </p>
                    <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two h-[44px]">
                      {`${p.material}, ${p.size}`}
                    </p>
                    <div className="flex justify-between items-center mt-[0.5rem]">
                      <p className="font-inter font-bold text-neutral-100 text-[0.8rem] lg:text-[1rem]">
                        {formatToRupiah(p.price)}
                      </p>
                      <button
                        className="transition-all hover:scale-[1.2]"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();

                          if (wishlistProducts.find((wp) => wp.id === p.id)) {
                            dispatch(removeProduct(p));
                          } else {
                            dispatch(addProduct(p));
                          }
                        }}
                      >
                        {wishlistProducts.find((wp) => wp.id === p.id) ? (
                          <Image
                            src="/assets/heart-filled.svg"
                            width={24}
                            height={24}
                            alt="Remove from wishlist"
                          />
                        ) : (
                          <Image
                            src="/assets/heart.svg"
                            width={24}
                            height={24}
                            alt="Add to wishlist"
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </Skeleton>
              </Link>
            );
          })}
        </div>
      )}
      {!isLoading && (!products || products.length === 0) && (
        <div className="p-[1rem]">
          <IconZoomExclamation size={128} color={colors.redIcon} />
          <h1 className="font-inter font-bold text-[1.5rem] text-neutral-100 mt-[1rem]">
            Hasil pencarian tidak ditemukan!
          </h1>
          <p className="font=inter text-neutral-60 mt-[1rem]">
            Belum ada produk yang sesuai dengan pencarianmu. Coba ganti filter
            atau kata kunci, atau hubungi admin untuk berkonsultasi terkait
            produk yang dicari.
          </p>
          <button
            onClick={() => sendWhatsappMessage(generalWhatsappMessage)}
            className="bg-primary-default px-[1rem] py-[0.5rem] font-bold font-inter text-neutral-10 mt-[1rem] transition-all hover:opacity-[0.9]"
          >
            Yuk, tanya admin!
          </button>
        </div>
      )}
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
                    <p
                      className="font-bold font-inter text-neutral-100"
                      style={{
                        color: d.subcategory.find(
                          (s) => s.id === filter.subcategoryId
                        )
                          ? colors.primaryDefault
                          : "",
                      }}
                    >
                      {d.name}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="flex flex-col gap-[1rem]">
                      {d.subcategory.map((s) => {
                        return (
                          <button
                            key={s.id}
                            className="font-inter text-neutral-100 transition-all hover:pl-[0.5rem] cursor-pointer text-left"
                            onClick={() => changeSubcategoryId(s.id)}
                            style={{
                              color:
                                filter.subcategoryId === s.id
                                  ? colors.primaryDefault
                                  : "",
                              fontWeight:
                                filter.subcategoryId === s.id ? "bold" : "",
                            }}
                          >
                            {s.name}
                          </button>
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
  );
};

export default MobileProducts;
