import { Dispatch, SetStateAction } from "react";
import { Pagination } from "@mantine/core";

type Props = {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
};

const WishlistPagination = ({ activePage, setActivePage }: Props) => {
  return (
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
  );
};

export default WishlistPagination;
