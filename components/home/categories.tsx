import Heading from "./heading";
import CategoryScroll from "../common/category-scroll";

export default function Categories() {
  return (
    <div className="mt-[2rem] lg:mt-[5rem]">
      <Heading text="Kategori Pilihan" />
      <CategoryScroll />
    </div>
  );
}
