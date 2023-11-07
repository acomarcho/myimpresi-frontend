import { Pagination } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
};

const BottomPagination = ({ activePage, setActivePage }: Props) => {
  return (
    <div className="flex justify-start lg:justify-end mt-[2rem]">
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

export default BottomPagination;
