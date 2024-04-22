import styled from 'styled-components';
import { useFeedbacksReceived } from '../../hooks/queries/useFeedbacksReceived';
import { FeedbackCard } from '../../components/FeedbackCard';
import { PageHeading } from '../../components/PageHeading';

export const FeedbacksReceivedPage = () => {
  const { data: feedbacksReceived } = useFeedbacksReceived();

  return (
    <Wrapper>
      <PageHeading>Feedbacks received</PageHeading>

      <Feedbacks>
        {feedbacksReceived?.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))}
      </Feedbacks>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Feedbacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
