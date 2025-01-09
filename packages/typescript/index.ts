type Query<T> = {
  event: string[];
  query: T;
};

type Command<T> = {
  event: string[];
  command: T;
};

export type { Query, Command };
