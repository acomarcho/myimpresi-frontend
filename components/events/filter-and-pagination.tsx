import { Select, Pagination } from "@mantine/core";
import { FindProductsFilter } from "@/types/requests";

type Props = {
  filter: FindProductsFilter;
  changeSortFilter: (value: string) => void;
  changeActivePage: (page: number) => void;
  pageCount: number;
};

const sortMappings: {
  [name: string]: string;
} = {
  RECOMMENDED: "Rekomendasi",
  LOWEST_PRICE: "Harga Terendah",
  HIGHEST_PRICE: "Harga Tertinggi",
};

const reverseSortMappings: {
  [name: string]: string;
} = {
  Rekomendasi: "RECOMMENDED",
  "Harga Terendah": "LOWEST_PRICE",
  "Harga Tertinggi": "HIGHEST_PRICE",
};

const FilterAndPagination = ({
  filter,
  changeSortFilter,
  changeActivePage,
  pageCount,
}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-[4rem] gap-[1rem]">
      <div className="flex items-center gap-[1rem]">
        <p className="font-inter font-bold">Urutkan: </p>
        <Select
          data={["Rekomendasi", "Harga Terendah", "Harga Tertinggi"]}
          value={sortMappings[filter.sort ?? "RECOMMENDED"]}
          onChange={(v) => {
            changeSortFilter(reverseSortMappings[v ?? "RECOMMENDED"]);
          }}
          styles={{
            input: {
              borderRadius: "100px",
            },
          }}
          allowDeselect={false}
        />
      </div>
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

export default FilterAndPagination;
