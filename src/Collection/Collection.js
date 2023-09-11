import React from 'react'
import "./Collection.css"
import Titan from "../img/Titan.jpeg";
import DiffStyle from "../img/difStyle.jpeg";
import Most from "../img/most-recommended.jpeg";
import bestSeller from "../img/best_saller.jpeg";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";


export default function Collection() {
  return (
    <>
      <section className="Collection">
        <div className="sectionNameCollection">
          <h1 className="CollectionTitle" >Collection</h1>
        </div>
        
        <section className="collectionContent" >
          <section className="collectionCard-container">
            <section className="collectionCard">
              <img className="collectionCard-img" src={Titan} alt="Titan" />
              <div className="collectionCard-details">
                <h3 className="collectionCard-title">Titan Watch</h3>
                <section className="collectionCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="collectionCard-price">
                  <div className="price">
                    <del>4000</del> 2999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section> 

          <section className="collectionCard-container">
            <section className="collectionCard">
              <img className="collectionCard-img" src={DiffStyle} alt="Different Style" />
              <div className="collectionCard-details">
                <h3 className="collectionCard-title">Visit for new style</h3>
                <section className="collectionCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="collectionCard-price">
                  {/* <div className="price">
                    <del>4000</del> 2999/-
                  </div> */}
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section> 

          <section className="collectionCard-container">
            <section className="collectionCard mostRecommended">
              <img className="collectionCard-img" src={Most} alt="Most Recommended" />
              <div className="collectionCard-details">
                <h3 className="collectionCard-title">Most Recommended</h3>
                <section className="collectionCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="collectionCard-price">
                  <div className="price">
                    <del>4000</del> 2999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section> 

          <section className="collectionCard-container">
            <section className="collectionCard">
              <img className="collectionCard-img" src={bestSeller} alt="Best Seller" />
              <div className="collectionCard-details">
                <h3 className="collectionCard-title">Best Seller</h3>
                <section className="collectionCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="collectionCard-price">
                  <div className="price">
                    <del>4000</del> 2999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section> 

        </section>
          
      </section>
    </>
  )
}
