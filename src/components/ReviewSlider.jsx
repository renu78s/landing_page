import React from 'react';
import '../styles/ReviewSlider.css';
import MainBtn from './MainBtn';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { BiRightArrowAlt } from 'react-icons/bi';
import { BiLeftArrowAlt } from 'react-icons/bi';

const ReviewSlider = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active ">
            {/* <img src="..." className="d-block w-100" alt="..." /> */}
            <div className="reviewSingle d-block ">
              <div className="review_icon_container">
                <BiSolidQuoteLeft className="review_icon" />
              </div>
              <p className="review_lines">
                She has become very expressive now through speech therapy. She
                speaks 3-4 word sentences properly. It was possible beacuase of
                you{' '}
              </p>
              <p className="review_name">shailee sharma</p>
              <MainBtn text="book assessment for £800" w="250" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="reviewSingle d-block ">
              <div className="review_icon_container">
                <BiSolidQuoteLeft className="review_icon" />
              </div>
              <p className="review_lines">
                She has become very expressive now through speech therapy. She
                speaks 3-4 word sentences properly. It was possible beacuase of
                you{' '}
              </p>
              <p className="review_name">shailee sharma</p>
              <MainBtn text="book assessment for £800" w="250" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="reviewSingle d-block ">
              <div className="review_icon_container">
                <BiSolidQuoteLeft className="review_icon" />
              </div>
              <p className="review_lines">
                She has become very expressive now through speech therapy. She
                speaks 3-4 word sentences properly. It was possible beacuase of
                you{' '}
              </p>
              <p className="review_name">shailee sharma</p>
              <MainBtn text="book assessment for £800" w="250" />
            </div>{' '}
          </div>
        </div>
        {/* carousel-control-prev carousel-control-next*/}
        <button
          className="left_arrow_review"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          {/* carousel-control-prev-icon */}
          <span className="" aria-hidden="true">
            {' '}
            <BiLeftArrowAlt className="arrow_review" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className=" right_arrow_review"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          {/* carousel-control-next-icon */}
          <span className="" aria-hidden="true">
            <BiRightArrowAlt className="arrow_review" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ReviewSlider;
