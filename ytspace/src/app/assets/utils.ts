interface pageData {
  place: string;
  title: string;
  summary: string;
  date: string;
  tags: string;
  keywords: string[];
  description: string;
  contentList: Content[];
  avatar?: Image;
  publications?: Publication[];
}

interface Content {
  text: string;
  image?: Image;
}

interface Image {
  url: string;
  alt?: string;
}

interface Publication {
  title: string;
  authors: string[];
  date: string;
  link: string;
}

export interface Repo {
  id: string;
  name: string;
  description: string;
  url: string;
}
