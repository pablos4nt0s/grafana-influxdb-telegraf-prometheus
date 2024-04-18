import styled from 'styled-components';
import { useFeedbacksGiven } from '../../hooks/queries/useFeedbacksGiven';
import { FeedbackCard } from '../../components/FeedbackCard';
import { PageHeading } from '../../components/PageHeading';

export const FeedbacksGivenPage = () => {
  const { data: feedbacksGiven } = useFeedbacksGiven();

  return (
    <Wrapper>
      <PageHeading>Feedbacks given</PageHeading>

      <Feedbacks>
        {feedbacksGiven?.map((feedback, index) => (
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
