import { FindProductsFilter } from "@/types/requests";
import { Category } from "@/types/responses";
import { ProductWithImages } from "@/types/responses/product";
import { colors } from "@/utils/colors";
import { formatToRupiah } from "@/utils/format-to-rupiah";
import { IconChevronDown, IconZoomExclamation } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/hooks/use-redux";
import { addProduct, removeProduct } from "@/redux/slices/wishlist-slice";
import { dummyProducts } from "@/utils/dummy-products";
import { generalWhatsappMessage, sendWhatsappMessage } from "@/utils/whatsapp";
import { Skeleton } from "@mantine/core";
import { useState } from "react";

type Props = {
  filter: FindProductsFilter;
  changeSubcategoryId: (subcategoryId: string) => void;
  filterData: Category[] | undefined;
  products: ProductWithImages[] | undefined;
  isLoading: boolean;
};

const DesktopProducts = ({
  filter,
  changeSubcategoryId,
  filterData,
  products,
  isLoading,
}: Props) => {
  const wishlistProducts = useAppSelector(
    (state) => state.wishlist.wishlistProducts
  );
  const dispatch = useAppDispatch();

  const renderedProducts = isLoading ? dummyProducts : products;

  return (
    <div className="hidden items-start gap-[1rem] mt-[2rem] relative hidden lg:flex">
      {/* Sidebar */}
      <div className="w-[10rem] sticky top-[10rem] flex-shrink-0">
        <p className="font-inter font-bold text-neutral-100">Semua Kategori</p>
        <hr className="text-neutral-20 my-[1rem]" />
        <CategoryAccordion
          filter={filter}
          filterData={filterData}
          changeSubcategoryId={changeSubcategoryId}
        />
      </div>
      {/* Products */}
      {renderedProducts && renderedProducts.length > 0 && (
        <Skeleton visible={isLoading}>
          <div className="grid grid-cols-4 gap-[1rem]">
            {renderedProducts?.map((p) => {
              return (
                <ProductCard
                  key={p.id}
                  product={p}
                  wishlistProducts={wishlistProducts}
                  dispatch={dispatch}
                />
              );
            })}
          </div>
        </Skeleton>
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
            onClick={() => {
              sendWhatsappMessage(generalWhatsappMessage);
            }}
            className="bg-primary-default px-[1rem] py-[0.5rem] font-bold font-inter text-neutral-10 mt-[1rem] transition-all hover:opacity-[0.9]"
          >
            Yuk, tanya admin!
          </button>
        </div>
      )}
    </div>
  );
};

const ProductCard = ({
  product,
  wishlistProducts,
  dispatch,
}: {
  product: ProductWithImages;
  wishlistProducts: ProductWithImages[];
  dispatch: any;
}) => {
  const p = product;
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
        className="w-full h-[250px] object-cover"
      />
      <div className="p-[0.75rem]">
        <p className="font-inter font-bold">{p.name.toUpperCase()}</p>
        <p className="font-inter text-neutral-60 text-[0.875rem] truncate-two h-[44px]">
          {`${p.material}, ${p.size}`}
        </p>
        <div className="flex justify-between items-center mt-[0.5rem]">
          <p className="font-inter font-bold text-neutral-100 text-[0.9rem] lg:text-[1rem]">
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
    </Link>
  );
};

type CategoryAccordionProps = {
  filter: FindProductsFilter;
  filterData: Category[] | undefined;
  changeSubcategoryId: (subcategoryId: string) => void;
};

const CategoryAccordion = ({
  filter,
  filterData,
  changeSubcategoryId,
}: CategoryAccordionProps) => {
  const [openAccordionId, setOpenAccordionId] = useState("");

  return (
    <div className="flex flex-col gap-[0.5rem]">
      {filterData?.map((d) => {
        return (
          <div key={d.id}>
            <div className="flex justify-between items-center gap-[1rem]">
              <button
                className="font-bold text-left"
                style={{
                  color: d.subcategory.find(
                    (s) => s.id === filter.subcategoryId
                  )
                    ? colors.primaryDefault
                    : "",
                }}
              >
                {d.name}
              </button>
              <button
                onClick={() => {
                  if (openAccordionId === d.id) {
                    setOpenAccordionId("");
                  } else {
                    setOpenAccordionId(d.id);
                  }
                }}
              >
                <IconChevronDown
                  className="transition-all"
                  style={{
                    transform:
                      openAccordionId === d.id
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              </button>
            </div>
            <div
              className="flex flex-col gap-[1rem] overflow-hidden mt-[1rem] transition-all items-start justify-start"
              style={{
                maxHeight: openAccordionId === d.id ? "400px" : "0px",
                paddingBottom: openAccordionId === d.id ? "0.5rem" : "0px",
              }}
            >
              {d.subcategory.map((s) => {
                return (
                  <button
                    key={s.id}
                    className="text-left hover:pl-[0.25rem] transition-all"
                    onClick={() => {
                      changeSubcategoryId(s.id);
                    }}
                    style={{
                      color:
                        filter.subcategoryId === s.id
                          ? colors.primaryDefault
                          : "",
                      fontWeight: filter.subcategoryId === s.id ? "bold" : "",
                    }}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopProducts;
