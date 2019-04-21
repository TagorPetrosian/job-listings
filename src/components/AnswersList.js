import React from 'react';
import AnswersListItem from './AnswersListItem';

const AnswersList = props => {
  const AnswersItems = props.answers.map(answer => {
    return (
      <AnswersListItem
        key={answer.company}
        company={answer.company}
        title={answer.title}
      />
    );
  });
  return <ul>{AnswersItems}</ul>;
};

export default AnswersList;
