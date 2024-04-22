import { useQuery } from '@tanstack/react-query';
import { fetchFeedbacksReceived } from '../../services/feedbackService';
import { Feedback } from '../../types';

export const useFeedbacksReceived = (
  page: number = 1,
  pageSize: number = 50
) => {
  return useQuery<Feedback[]>({
    queryKey: ['feedbacks_received', page, pageSize],
    queryFn: async () => {
      const { data } = await fetchFeedbacksReceived(page, pageSize);
      return data;
    },
  });
};
