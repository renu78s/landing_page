import React, { useRef } from 'react';

import '../styles/HorizontalScroll.css';

import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';

function HorizontalScroll({ children, customClass }) {
  // Create a ref to access the scrollable container
  const scrollContainerRef = useRef(null);

  // Function to scroll the container to the right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 400; // Adjust the scroll distance as needed
    }
  };

  // Function to scroll the container to the left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 400; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className={`scrollContainer ${customClass}`}>
      {/* Buttons to trigger scrolling */}
      <button onClick={scrollLeft} className="leftScroll">
        <BiChevronLeft className="leftArrow_icon " />
      </button>
      <button onClick={scrollRight} className="rightScroll">
        <BiChevronRight className="rightArrow_icon" />
      </button>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        style={{
          width: '100vw', // Set the width of your scrollable container
          overflowX: 'scroll', // Enable horizontal scrolling
          whiteSpace: 'nowrap', // Allow elements to be displayed in a single line
        }}
        className="scrollDesign"
      >
        {/* Content to be scrolled horizontally */}
        <div style={{ width: '70px' }}>
          {/* Add your content here */}
          {/* Example: */}

          <div
            style={{
              display: 'flex',
            }}
          >
            {children}
          </div>
          {/* ... */}
        </div>
      </div>
    </div>
  );
}

export default HorizontalScroll;
