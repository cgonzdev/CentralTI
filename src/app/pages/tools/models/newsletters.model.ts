interface News {
  title: string;
  link: string;
}

interface Categories {
  category: string;
  news: News[];
}

export interface NewsletterModel {
  categories: Categories[];
}
