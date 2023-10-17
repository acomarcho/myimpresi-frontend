export type Category = {
  id: number;
  name: string;
  isFeatured: boolean;
  imagePath: string;
};

export type GetCategoriesResponse = {
  categories: Category[];
};
