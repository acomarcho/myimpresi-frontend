import { Pagination } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  pageCount: number;
};

const BottomPagination = ({ activePage, setActivePage, pageCount }: Props) => {
  return (
    <div className="flex justify-start lg:justify-end mt-[2rem]">
      <Pagination
        value={activePage}
        onChange={setActivePage}
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
