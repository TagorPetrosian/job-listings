import React, { Component } from 'react';
import placeholder from '../images/placeholder.png';
import './ListItem.css';
import './DatePicker.css';
import DatePicker from './DatePicker';

export default class InterviewsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: Date.now()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });

    console.log(
      new Date(this.state.startDate).toLocaleDateString('en-GB'),
      'start date'
    );
  };

  render() {
    const { title } = this.props;
    return (
      <div className="answer-section">
        <div className="left">
          <img
            className="img-placeholder"
            alt="placeholder"
            src={placeholder}
          />
        </div>
        <div className="middle">
          <p>
            <span className="bold-text">{title}</span>
          </p>
          <p>
            <span className="bold-text p-r-8">
              Congratulations, you're hired!
            </span>
            <span className="date p-r-8">Yesterday</span>
            <span className="badge">New</span>
          </p>
          <p className="left-description">
            Dear applicant, we received your resume through the Codex system and
            we are glad to inform you that we with to interview you. In the next
            few days...
          </p>
        </div>
        <div className="right-interviews">
          <div className="back-col">
            <p className="right-text">
              Tell us about your Codex recruiting process
            </p>
            <i className="fas fa-chevron-right next-icon" />
          </div>
          <div className="back-col m-t-2">
            <DatePicker
              onChange={this.handleChange}
              className="date-picker"
              type="date"
              placeholder="Scheduled Date?"
            />
          </div>
        </div>
      </div>
    );
  }
}
