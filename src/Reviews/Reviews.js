import React from "react";
import "./Reviews.css";
import { AiFillStar } from "react-icons/ai";

function Reviews() {
  return (
    <>
      <section className="Reviews">
        <div className="sectionNameReviews">
          <h1 className="ReviewsTitle" >Reviews</h1>
        </div>
        
        <section className="ReviewsContent" >
          <section className="ReviewsCard-container">
            <section className="ReviewsCard">
              <din className="ReviewsCard-note">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.</span>
              </din>
              <div className="ReviewsCard-details">
                
                <section className="ReviewsCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <h3 className="ReviewsCard-title">Avinash</h3>
              </div>
            </section>
          </section> 

          <section className="ReviewsCard-container">
            <section className="ReviewsCard">
              <din className="ReviewsCard-note">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.</span>
              </din>
              <div className="ReviewsCard-details">
                
                <section className="ReviewsCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <h3 className="ReviewsCard-title">Avinash</h3>
              </div>
            </section>
          </section> 

          <section className="ReviewsCard-container">
            <section className="ReviewsCard">
              <din className="ReviewsCard-note">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.</span>
              </din>
              <div className="ReviewsCard-details">
                
                <section className="ReviewsCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <h3 className="ReviewsCard-title">Avinash</h3>
              </div>
            </section>
          </section> 
          
          <section className="ReviewsCard-container">
            <section className="ReviewsCard">
              <din className="ReviewsCard-note">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.adipisicing elit. Ad, maxime.</span>
              </din>
              <div className="ReviewsCard-details">
                
                <section className="ReviewsCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <h3 className="ReviewsCard-title">Avinash</h3>
              </div>
            </section>
          </section> 
        </section>
      </section>
    </>
  );
}

export default Reviews;
