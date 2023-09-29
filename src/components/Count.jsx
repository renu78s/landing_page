import React from 'react';
import '../styles/Count.css';
const Count = ({ num, before, after }) => {
  return (
    <>
      <div>
        <div className="count_number">
          {num} <span>+</span>
        </div>
        <div className="count_title">
          {before} <br></br> {after}
        </div>
      </div>
    </>
  );
};

export default Count;
