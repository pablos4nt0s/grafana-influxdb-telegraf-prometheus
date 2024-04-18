import { Feedback, PaginatedResponse } from '../types';

export const fetchFeedbacksGiven = async (page: number, pageSize: number) => {
  return fetchPaginatedResponse('/feedbacks/given', page, pageSize);
};

export const fetchFeedbacksReceived = async (
  page: number,
  pageSize: number
) => {
  return fetchPaginatedResponse('/feedbacks/received', page, pageSize);
};

const fetchPaginatedResponse = async (
  url: string,
  page: number,
  pageSize: number
) => {
  const queryParams = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
  });
  const response = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}${url}?` + queryParams
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}.`);
  }
  return response.json() as Promise<PaginatedResponse<Feedback>>;
};
