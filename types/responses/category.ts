import { Subcategory } from "./subcategory";

export type Category = {
  id: string;
  name: string;
  isFeatured: boolean;
  imagePath: string;
  subcategory: Subcategory[];
};

export type GetCategoriesResponse = {
  categories: Category[];
};
