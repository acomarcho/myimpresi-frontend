export type Article = {
  id: string;
  title: string;
  content: string;
  imagePath: string;
  rank: number | null;
};

export type GetAllArticlesResponse = {
  articles: Article[];
};

export type GetSingleArticleResponse = {
  data: Article;
};
