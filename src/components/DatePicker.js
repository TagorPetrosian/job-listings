import React from 'react';
import './DatePicker.css';

export default ({ input, onChange, type }) => {
  return (
    <div className="input-warpper">
      <label>
        {/* <i className="far fa-calendar-alt date-icon" /> */}
        <input {...input} onChange={onChange} type={type} />
      </label>
    </div>
  );
};
