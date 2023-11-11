import { Pagination } from "@mantine/core";
import { FindProductsFilter } from "@/types/requests";

type Props = {
  filter: FindProductsFilter;
  changeActivePage: (page: number) => void;
  pageCount: number;
};

const BottomPagination = ({ filter, changeActivePage, pageCount }: Props) => {
  return (
    <div className="flex justify-start lg:justify-end mt-[2rem]">
      <Pagination
        value={filter.page}
        onChange={(v) => {
          changeActivePage(v);
        }}
        total={pageCount}
        withControls={false}
        styles={{
          control: {
            border: "none",
          },
        }}
      />
    </div>
  );
};

export default BottomPagination;
