import { Modal } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { colors } from "@/utils/colors";
import { Dispatch, SetStateAction } from "react";

import { ProductWithImages } from "@/types/responses/product";

import { removeProduct } from "@/redux/slices/wishlist-slice";
import { useAppDispatch } from "@/hooks/use-redux";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  selectedProduct: ProductWithImages | null;
};

const DeleteWishlistConfirmationModal = ({
  isModalOpen,
  setIsModalOpen,
  selectedProduct,
}: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} centered>
      <div className="flex flex-col justify-center gap-[0.5rem] text-[1.5rem] p-[1rem]">
        <IconTrash size={60} color={colors.redIcon} className="mx-auto" />
        <h1 className="font-inter text-neutral-100 font-bold text-center">
          Hapus Produk?
        </h1>
        <p className="font-inter text-neutral-60 text-center text-[1rem]">
          Apakah Anda yakin ingin menghapus item ini dari wishlist?
        </p>
        <div className="grid grid-cols-2 items-center gap-[1.5rem] mt-[0.5rem]">
          <button
            onClick={() => setIsModalOpen(false)}
            className="border-[1px] border-secondary-red rounded-xl p-[0.75rem] text-[1rem] font-bold text-secondary-red font-inter"
          >
            Batal
          </button>
          <button
            onClick={() => {
              if (selectedProduct) {
                dispatch(removeProduct(selectedProduct));
              }

              setIsModalOpen(false);
            }}
            className="rounded-xl bg-red text-white font-bold text-[1rem] p-[0.75rem] font-inter"
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteWishlistConfirmationModal;
