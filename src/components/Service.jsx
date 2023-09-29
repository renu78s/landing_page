import React from 'react';
import '../styles/Service.css';
import { BiSolidUser } from 'react-icons/bi';
import { BiMobileAlt } from 'react-icons/bi';
import { LuNetwork } from 'react-icons/lu';

const Service = ({ icon, text, span }) => {
  return (
    <>
      <div className="service ">
        {icon == 'user' && <BiSolidUser className="person_icon blue center" />}
        {icon == 'net' && <LuNetwork className="person_icon blue center" />}
        {icon == 'mob' && <BiMobileAlt className="person_icon blue center" />}

        <p className="blue">
          <span>{span} </span>
          {text}
        </p>
      </div>
    </>
  );
};

export default Service;
