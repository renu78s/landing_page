import React from 'react';
import '../styles/SlideItem.css';
import person from '../assets/person.jpg';
const SlideItems = () => {
  return (
    <>
      <div className="signleExpert_container">
        <div className="expert_content">
          <img src={person} alt="profile1" />
          <h5>Dr. Sonam Kothari</h5>
          <div className="profile1_para">
            <p>Lorem</p>
            <p>Lorem ipsum dolor </p>
            <p>Lorem ipsum </p>
          </div>

          <h6>10+ years of experience</h6>
        </div>
      </div>
    </>
  );
};

export default SlideItems;
