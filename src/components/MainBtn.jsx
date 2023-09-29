import React from 'react';
import '../styles/MainBtn.css';
import { Link } from 'react-router-dom';
const MainBtn = ({ text, w }) => {
  return (
    <>
      <span className="nav_btn center" style={{ width: `${w}px` }}>
        <Link to="/" className="link">
          {text}
        </Link>
      </span>
    </>
  );
};

export default MainBtn;
