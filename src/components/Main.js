import React, { Component } from 'react';
import AnswersList from './AnswersList';
import InterviewsList from './InterviewsList';
import './Main.css';

const answers = [
  { company: 'HP', title: 'Experienced Developer' },
  { company: 'Intel', title: 'Junior Developer' }
];

const interviews = [
  { title: 'Experienced Developer' },
  { title: 'Junior Developer' },
  { title: 'Experienced UX Designer' }
];

export default class Main extends Component {
  render() {
    return (
      <div className="content">
        <div>
          <h3>Answers</h3>
          <AnswersList answers={answers} />
        </div>
        <div>
          <h3>Interviews</h3>
          <InterviewsList interviews={interviews} />
        </div>
      </div>
    );
  }
}
