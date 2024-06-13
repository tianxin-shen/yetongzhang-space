interface pageData {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
  images?: Image[];
  publications?: Publication[];
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
