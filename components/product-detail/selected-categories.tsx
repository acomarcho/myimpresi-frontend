import Heading from "../home/heading";
import CategoryScroll from "../common/category-scroll";

const SelectedCategories = () => {
  return (
    <div className="mt-[2rem]">
      <Heading text="Kategori Pilihan" />
      <CategoryScroll />
    </div>
  );
};

export default SelectedCategories;
