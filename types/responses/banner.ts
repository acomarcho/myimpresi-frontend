export type Banner = {
  id: number;
  imagePath: string;
};

export type GetBannersResponse = {
  banners: Banner[];
};
