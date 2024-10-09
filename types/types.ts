export type Post = {
  id: string;
  slug?: string;
  title?: string;
  content?: string;
  author?: string;
};

export type PostPageProps = {
  params: { id: string };
};
export type User = {
  username: string;
  sex: string;
  email: string;
  name: string;
};
export type BitcoinPrice = {
  bpi: {
    USD: {
      rate_float: number;
      description: string;
    };
  };
};
