import { RequestGenericInterface } from 'fastify';

export type PaginatedResponseQueryParams = RequestGenericInterface & {
  Querystring: {
    page?: number;
    pageSize?: number;
  };
};
