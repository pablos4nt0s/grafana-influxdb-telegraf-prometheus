export type User = {
  id: number;
  name: string;
  photoUrl: string;
};

export type Feedback = {
  id: number;
  text: string;
  reviewee: User;
  reviewer: User;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
};
