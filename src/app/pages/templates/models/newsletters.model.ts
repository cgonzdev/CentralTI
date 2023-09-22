export interface news {
  title: string;
  link: string;
}

export interface newsletters {
  category: string;
  news: news[];
}
