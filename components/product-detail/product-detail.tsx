import { formatToRupiah } from "@/utils/format-to-rupiah";
import ImageSelector from "./image-selector";
import ImageCarousel from "./image-carousel";
import { ProductWithImages } from "@/types/responses/product";
import { LoadingOverlay } from "@mantine/core";
import Image from "next/image";

import { addProduct, removeProduct } from "@/redux/slices/wishlist-slice";
import { useAppSelector, useAppDispatch } from "@/hooks/use-redux";
import { IconZoomExclamation } from "@tabler/icons-react";
import { colors } from "@/utils/colors";

import {
  sendWhatsappMessage,
  generalWhatsappMessage,
  productWhatsappMessage,
} from "@/utils/whatsapp";

type Props = {
  product?: ProductWithImages;
  isLoading: boolean;
};

const dummyProduct: ProductWithImages = {
  id: "f8a3dd2b-d6fc-46f7-b815-91c38009d14b",
  name: "Leiti",
  price: 210000,
  soldAmount: 200,
  minimumOrder: 20,
  description:
    "Jam dinding dengan diameter besar ini mampu menjadi pusat perhatian yang menarik untuk ruangan anda. Selain sebagai penunjuk waktu, jam dinding LEITI juga mampu sebagai penambah dekorasi yang manis.",
  subcategoryId: "572b5a3b-0960-4508-a775-f79f55472c18",
  isFeaturedAtCategory: false,
  colors: ["#ffffff", "#000000", "#c0c0c0"],
  material: "Frame plastik polytyrene, tutup kaca",
  size: "40 cm",
  rank: null,
  productPromo: "KEMERDEKAAN",
  productImage: [
    {
      id: "f1691ea5-a46d-4342-9ac4-9602f88133f3",
      path: "/dummy/produk.png",
      productId: "f8a3dd2b-d6fc-46f7-b815-91c38009d14b",
      isMainImage: true,
    },
  ],
  sku: null,
};

const ProductDetail = ({ product, isLoading }: Props) => {
  const wishlistProducts = useAppSelector(
    (state) => state.wishlist.wishlistProducts
  );
  const dispatch = useAppDispatch();

  if (isLoading) {
    product = dummyProduct;
  }

  if (!isLoading && !product) {
    return (
      <div className="p-[1rem]">
        <IconZoomExclamation size={128} color={colors.redIcon} />
        <h1 className="font-inter font-bold text-[1.5rem] text-neutral-100 mt-[1rem]">
          Produk tidak ditemukan!
        </h1>
        <p className="font=inter text-neutral-60 mt-[1rem]">
          Produk yang Anda coba untuk buka tidak ditemukan dalam sistem. Coba
          cari produk lain, ya, atau kontak admin melalui tombol di bawah ini!
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
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[0rem] lg:gap-[2rem] lg:grid-cols-2 relative">
      {product && (
        <>
          <div>
            <LoadingOverlay
              visible={isLoading}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
            <div className="block lg:hidden">
              <ImageCarousel product={product} />
            </div>
            <div className="hidden lg:block">
              <ImageSelector product={product} />
            </div>
          </div>
          <div>
            <LoadingOverlay
              visible={isLoading}
              zIndex={1000}
              overlayProps={{ radius: "sm", blur: 2 }}
            />
            <h1 className="font-inter font-bold text-[2rem] text-neutral-100">
              {product.name.toUpperCase()}
            </h1>
            <p className="font-inter text-[1rem] text-neutral-60">
              {`${product.material}, ${product.size}`}
            </p>
            <p className="font-inter text-[1.25rem] text-neutral-100 font-bold mt-[1rem]">
              {formatToRupiah(product.price)}
            </p>
            <p className="font-inter text-[1rem] text-neutral-60">
              {product.soldAmount} membeli produk ini
            </p>
            <hr className="text-neutral-20 mt-[0.5rem]" />
            <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
              Warna:
            </p>
            <div className="flex gap-[0.5rem] flex-wrap">
              {product.colors.map((c) => {
                if (c !== "MIX") {
                  return (
                    <div
                      className="w-[30px] h-[30px] rounded-full shadow-md"
                      style={{
                        backgroundColor: c,
                      }}
                      key={c}
                    />
                  );
                }
                return (
                  <div
                    className="w-[30px] h-[30px] rounded-full shadow-md"
                    style={{
                      background: `conic-gradient(
                        from 90deg,
                        violet,
                        indigo,
                        blue,
                        green,
                        yellow,
                        orange,
                        red,
                        violet
                      )`,
                    }}
                    key={c}
                  />
                );
              })}
            </div>
            <hr className="text-neutral-20 mt-[1rem]" />
            <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
              Bahan:
            </p>
            <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
              {product.material}
            </p>
            <hr className="text-neutral-20 mt-[1rem]" />
            <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
              Ukuran:
            </p>
            <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
              {product.size}
            </p>
            <hr className="text-neutral-20 mt-[1rem]" />
            <p className="font-inter text-[1rem] text-neutral-60 font-bold mt-[0.5rem]">
              Minimal order hanya:
            </p>
            <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
              {product.minimumOrder} pcs
            </p>
            <hr className="text-neutral-20 mt-[1rem]" />
            <p className="font-inter text-[1rem] text-neutral-60 mt-[0.5rem]">
              {product.description}
            </p>
            <div className="fixed bg-neutral-10 bottom-0 left-0 w-screen grid grid-cols-[auto_1fr] p-[1.5rem] gap-[1rem] z-[20] lg:static lg:w-full">
              <button
                className="p-[1rem] rounded-full border-[1px] border-neutral-20 transition-all hover:scale-[1.1]"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (product) {
                    if (wishlistProducts.find((wp) => wp.id === product?.id)) {
                      dispatch(removeProduct(product));
                    } else {
                      dispatch(addProduct(product));
                    }
                  }
                }}
              >
                {wishlistProducts.find((wp) => wp.id === product?.id) ? (
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
              <button
                onClick={() => {
                  sendWhatsappMessage(
                    productWhatsappMessage(
                      product?.name || "",
                      product?.sku || "",
                      window.location.toString()
                    )
                  );
                }}
                className="p-[0.75rem] bg-primary-default font-inter font-bold text-neutral-10 rounded-full transition-all hover:opacity-[0.9]"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
