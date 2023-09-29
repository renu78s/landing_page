import React from 'react';
import '../styles/WorkSteps.css';
import { BiSolidWalletAlt } from 'react-icons/bi';
const WorkSteps = ({ icon, heading, para, extra }) => {
  return (
    <div className="step">
      {icon == 'payment' && (
        <div className="step_icon_contain">
          <BiSolidWalletAlt className="step_icon" />
        </div>
      )}

      <h4>
        {heading}
        {extra}
      </h4>
      <p>{para}</p>
    </div>
  );
};

export default WorkSteps;
