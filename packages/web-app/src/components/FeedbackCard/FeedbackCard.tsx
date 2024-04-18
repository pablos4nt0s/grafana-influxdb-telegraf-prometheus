import { HiArrowRight } from 'react-icons/hi';
import styled from 'styled-components';
import { Link } from '../Link';
import { Feedback } from '../../types';

type Props = {
  feedback: Feedback;
};

export const FeedbackCard: React.FC<Props> = ({ feedback }) => {
  return (
    <ItemWrapper>
      <AvatarsWrapper>
        <Avatar src={feedback.reviewer.photoUrl} alt={feedback.reviewer.name} />
        <ArrowRight />
        <Avatar src={feedback.reviewee.photoUrl} alt={feedback.reviewee.name} />
      </AvatarsWrapper>
      <FeedbackContent>
        <RevieweeName>{feedback.reviewee.name}</RevieweeName>
        <ReviewerName>By {feedback.reviewer.name}</ReviewerName>
        <FeedbackText>{feedback.text}</FeedbackText>
        <ViewDetailsLink href={`/feedbacks/${feedback.id}`}>
          View details
        </ViewDetailsLink>
      </FeedbackContent>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  padding: 20px;
  background-color: #fefefe;
  border: 1px solid #e9e9e9;
  border-radius: 10px;
  max-width: 350px;
`;

const AvatarsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const ArrowRight = styled(HiArrowRight)`
  font-size: 18px;
  color: #646464;
`;

const FeedbackContent = styled.div``;

const RevieweeName = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #000e38;
`;

const ReviewerName = styled.h4`
  margin: 5px 0 0 0;
  font-size: 12px;
  font-weight: 400;
  color: #646464;
`;

const FeedbackText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const ViewDetailsLink = styled(Link)`
  font-size: 14px;
`;
