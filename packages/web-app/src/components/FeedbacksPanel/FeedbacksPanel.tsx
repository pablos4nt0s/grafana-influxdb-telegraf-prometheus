import React from 'react';
import styled from 'styled-components';
import { Panel } from '../Panel';
import { Link } from '../Link';
import { FeedbackCard } from '../FeedbackCard/FeedbackCard';
import { Feedback } from '../../types';

type Props = {
  title: string;
  feedbacks: Feedback[];
  viewAllLink: string;
};

export const FeedbacksPanel: React.FC<Props> = (props) => {
  return (
    <Panel title={props.title}>
      <PanelContent>
        {props.feedbacks?.map((feedback) => (
          <FeedbackCard key={feedback.id} feedback={feedback} />
        ))}
      </PanelContent>
      <ViewAllLink href={props.viewAllLink}>View all</ViewAllLink>
    </Panel>
  );
};

const PanelContent = styled.div`
  display: flex;
  gap: 10px;
`;

const ViewAllLink = styled(Link)`
  margin-top: 20px;
  display: inline-block;
`;
