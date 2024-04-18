import { useQuery } from '@tanstack/react-query';
import { fetchFeedbacksGiven } from '../../services/feedbackService';
import { Feedback } from '../../types';

export const useFeedbacksGiven = (page: number = 1, pageSize: number = 50) => {
  return useQuery<Feedback[]>({
    queryKey: ['feedbacks_given', page, pageSize],
    queryFn: async () => {
      const { data } = await fetchFeedbacksGiven(page, pageSize);
      return data;
    },
  });
};
