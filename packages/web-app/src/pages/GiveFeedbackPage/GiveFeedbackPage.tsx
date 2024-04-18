import styled from 'styled-components';
import { PageHeading } from '../../components/PageHeading';

export const GiveFeedbackPage = () => {
  return (
    <Wrapper>
      <PageHeading>Give Feedback</PageHeading>

      <Form></Form>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
