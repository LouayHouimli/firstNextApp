export type Post = {
  id: number;
  slug?: string;
  title?: string;
  content?: string;
};

export type PostPageProps = {
  params: { id: number };
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
