import React from 'react';
import JobListingsItem from './JobListingsItem';

const JobListingsList = props => {
  const JobListingsList = props.listings.map(listing => {
    return (
      <JobListingsItem
        key={listing.title}
        title={listing.title}
        description={listing.description}
        rating={listing.rating}
      />
    );
  });
  return <ul>{JobListingsList}</ul>;
};

export default JobListingsList;
