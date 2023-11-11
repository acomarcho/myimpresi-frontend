export type Product = {
  id: string;
  name: string;
  price: number;
  soldAmount: number;
  minimumOrder: number;
  description: string;
  subcategoryId: string;
  isFeaturedAtCategory: boolean;
  colors: string[];
  material: string;
  size: string;
  rank: number | null;
  productPromo: string | null;
};

export type ProductImage = {
  id: string;
  path: string;
  productId: string;
  isMainImage: boolean;
};

export type ProductWithImages = Product & {
  productImage: ProductImage[];
};

export type GetFeaturedProductsResponse = {
  data: ProductWithImages[];
};

export type GetPromoProductsResponse = {
  data: ProductWithImages[];
};

export type GetSingleProductResponse = {
  data: ProductWithImages;
};
