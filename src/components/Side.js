import React, { Component } from 'react';
import JobListingsList from './JobListingsList';
import './Side.css';

const listings = [
  {
    title: 'Entry Level Intellectual Property Attorney',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4.5
  },
  {
    title: 'Staff Attorney',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
    rating: 4
  }
];

export default class Side extends Component {
  render() {
    return (
      <div className="side">
        <div className="side__section side__section--recruiter">
          <div className="icon-warpper">
            <div className="counsel m-10">
              <i className="fas fa-user-alt user-icon center" />
            </div>
          </div>
          <div className="counsel-warpper">
            <span className="counsel-name">Liat Ben Zvi</span>
            <span className="description">Your recruitment counsel</span>
            <p className="contact-counsel">
              <i className="fas fa-phone ">
                <span className="p-5">Phone</span>
              </i>
              <i className="fas fa-envelope p-l-15">
                <span className="p-5">email</span>
              </i>
            </p>
          </div>
        </div>
        <div className="side__section side__section--listings-search m-t-15">
          <p className="job-listings">Search Job Listing</p>
          <p className="p-l-15 m-t-15">
            <span className="badge-listings">5</span>
            <span className="p-l-4">Favorites</span>
            <span className="badge-listings m-l-15">23</span>
            <span className="p-l-4">Relevant Jobs</span>
          </p>
        </div>
        <div className="side__section--listings-share m-t-15">
          <p className="job-listings">Share Job Listing</p>
          <JobListingsList listings={listings} />
          <p className="help-friends">
            Help your friends find more job openings
          </p>
        </div>
      </div>
    );
  }
}
