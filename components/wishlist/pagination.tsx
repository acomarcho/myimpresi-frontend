import { Pagination } from "@mantine/core";

type Props = {
  filter: WishlistFilter;
  changeActivePage: (page: number) => void;
  pageCount: number;
};

type WishlistFilter = {
  page: number;
  pageSize: number;
};

const WishlistPagination = ({ filter, changeActivePage, pageCount }: Props) => {
  return (
    <Pagination
      value={filter.page}
      onChange={(p) => changeActivePage(p)}
      total={pageCount}
      withControls={false}
      styles={{
        control: {
          border: "none",
        },
      }}
    />
  );
};

export default WishlistPagination;
