import React, { Component } from 'react';
import './JobListingsItem.css';
import { InlineShareButtons } from 'sharethis-reactjs';

export default class JobListingItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false
    };
  }

  onShareClick = () => {
    this.setState({ showButtons: true });
  };

  render() {
    const { description, rating, title } = this.props;
    return (
      <div className="job-listing">
        <p className="job-listings-title">{title}</p>
        <p className="job-description">{description}</p>
        <div className="clearfix">
          <span className="rating">
            <i className="fas fa-star" />
            {rating}
          </span>
          <span className="share">
            <i
              className="fas fa-share-alt  hoverable"
              onClick={this.onShareClick}
            />
          </span>
        </div>
        {this.state.showButtons ? (
          <InlineShareButtons
            config={{
              alignment: 'center', // alignment of buttons (left, center, right)
              color: 'social', // set the color of buttons (social, white)
              enabled: true, // show/hide buttons (true, false)
              font_size: 16, // font size for the buttons
              labels: 'cta', // button labels (cta, counts, null)
              language: 'en', // which language to use (see LANGUAGES)
              networks: [
                // which networks to include (see SHARING NETWORKS)
                'whatsapp',
                'linkedin',
                'messenger',
                'facebook',
                'twitter'
              ],
              padding: 12, // padding within buttons (INTEGER)
              radius: 4, // the corner radius on each button (INTEGER)
              show_total: true,
              size: 40, // the size of each button (INTEGER)

              // OPTIONAL PARAMETERS
              url: 'https://www.sharethis.com', // (defaults to current url)
              image: 'https://bit.ly/2CMhCMC', // (defaults to og:image or twitter:image)
              description: 'custom text', // (defaults to og:description or twitter:description)
              title: 'custom title', // (defaults to og:title or twitter:title)
              message: 'custom email text', // (only for email sharing)
              subject: 'custom email subject', // (only for email sharing)
              username: 'custom twitter handle' // (only for twitter sharing)
            }}
          />
        ) : null}
      </div>
    );
  }
}
