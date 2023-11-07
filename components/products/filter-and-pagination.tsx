import { Select, Pagination } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  sortFilter: string | null;
  setSortFilter: Dispatch<SetStateAction<string | null>>;
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
};

const FilterAndPagination = ({
  sortFilter,
  setSortFilter,
  activePage,
  setActivePage,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[4rem] gap-[1rem]">
      <div className="flex items-center gap-[1rem]">
        <p className="font-inter font-bold">Urutkan: </p>
        <Select
          data={["Rekomendasi", "Harga Terendah", "Harga Tertinggi"]}
          value={sortFilter}
          onChange={setSortFilter}
          styles={{
            input: {
              borderRadius: "100px",
            },
          }}
        />
      </div>
      <Pagination
        value={activePage}
        onChange={setActivePage}
        total={10}
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

export default FilterAndPagination;
