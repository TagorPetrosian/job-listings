import React from 'react';
import placeholder from '../images/placeholder.png';
import './ListItem.css';

const AnswersListItem = ({ company, title }) => {
  return (
    <div className="answer-section">
      <div className="left">
        <img className="img-placeholder" alt="placeholder" src={placeholder} />
      </div>
      <div className="middle">
        <p>
          <span className="bold-text">{company}</span> - {title}
        </p>
        <p>
          <span className="bold-text p-r-8">
            Congratulations, you're hired!
          </span>
          <span className="date p-r-8">Today</span>
          <span className="badge">New</span>
        </p>
      </div>
      <div className="right">
        <p className="right-text">
          Tell us about your Codex recruiting process
        </p>
        <i className="fas fa-chevron-right next-icon" />
      </div>
    </div>
  );
};

export default AnswersListItem;
