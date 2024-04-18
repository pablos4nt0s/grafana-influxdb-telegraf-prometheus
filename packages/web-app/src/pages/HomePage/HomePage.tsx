import styled from 'styled-components';
import { FeedbacksPanel } from '../../components/FeedbacksPanel';
import { useFeedbacksGiven } from '../../hooks/queries/useFeedbacksGiven';
import { useFeedbacksReceived } from '../../hooks/queries/useFeedbacksReceived';

export const HomePage = () => {
  const { data: feedbacksGiven } = useFeedbacksGiven(1, 3);
  const { data: feedbacksReceived } = useFeedbacksReceived(1, 3);

  return (
    <Wrapper>
      <FeedbacksPanel
        title="Feedbacks given"
        feedbacks={feedbacksGiven ?? []}
        viewAllLink="/feedbacks/given"
      />
      <FeedbacksPanel
        title="Feedbacks received"
        feedbacks={feedbacksReceived ?? []}
        viewAllLink="/feedbacks/received"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
`;
