import React from 'react';
import InterviewsListItem from './InterviewsListItem';

const InterviewsList = props => {
  const InterviewsItems = props.interviews.map(interview => {
    return <InterviewsListItem key={interview.title} title={interview.title} />;
  });
  return <ul>{InterviewsItems}</ul>;
};

export default InterviewsList;
