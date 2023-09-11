import React from "react";
import "./FavourateProduct.css";
import Titan from "../img/Titan.jpeg";
import DiffStyle from "../img/difStyle.jpeg";
import Most from "../img/most-recommended.jpeg";
// import bestSeller from "../img/best_saller.jpeg";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";


export default function FavourateProduct() {
  const handleEveryClick = ()=>{
    document.getElementById('every').style.display="flex";
    document.getElementById('act').style.display="none";
    document.getElementById('par').style.display="none";

  }
  const handleActivityClick = ()=>{
    document.getElementById('every').style.display="none";
    document.getElementById('act').style.display="flex";
    document.getElementById('par').style.display="none";


  }
  const handlePartyClick = ()=>{
    document.getElementById('par').style.display="flex";
    document.getElementById('every').style.display="none";
    document.getElementById('act').style.display="none";

  }
  return (
    <>
      <section className="Fav">
        <div className="sectionNameFav">
          <h1 className="favTitle" >Our Favourite</h1>
        </div>
        <div className="name">
          <div className="EverydayTitle">
            
              <span className="eveTitle" onClick={handleEveryClick}>For Everyday</span>
        
          </div>
          <div className="ActivityTitle">
            
              <span className="actTitle" onClick={handleActivityClick}>For Activity</span>
           
          </div>
          <div className="partyTitle" onClick={handlePartyClick}>
           
              <span className="parTitle">For party</span>

          </div>
        </div>
        <section className="Everyday" id="every">
          <section className="favCard-container">
            <section className="favCard">
              <img className="favCard-img" src={Titan} alt="Titan" />
              <div className="favCard-details">
                <h3 className="favCard-title">Titan Watch</h3>
                <section className="favCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="favCard-price">
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
          <section className="favCard-container">
            <section className="favCard">
              <img className="favCard-img" src={Titan} alt="Titan" />
              <div className="favCard-details">
                <h3 className="favCard-title">Titan Watch</h3>
                <section className="favCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="favCard-price">
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
          <section className="favCard-container">
            <section className="favCard">
              <img className="favCard-img" src={Titan} alt="Titan" />
              <div className="favCard-details">
                <h3 className="favCard-title">Titan Watch</h3>
                <section className="favCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="favCard-price">
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

        <section className="activity" id="act">
          <section className="actCard-container">
            <section className="actCard">
              <img className="actCard-img" src={Most} alt="Most" />
              <div className="actCard-details">
                <h3 className="actCard-title">Titan Watch</h3>
                <section className="actCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="actCard-price">
                  <div className="price">
                    <del>8000</del> 5999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="actCard-container">
            <section className="actCard">
              <img className="actCard-img" src={Most} alt="most" />
              <div className="actCard-details">
                <h3 className="actCard-title">Titan Watch</h3>
                <section className="actCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="actCard-price">
                  <div className="price">
                    <del>8000</del> 5999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="actCard-container">
            <section className="actCard">
              <img className="actCard-img" src={Most} alt="Most" />
              <div className="actCard-details">
                <h3 className="actCard-title">Titan Watch</h3>
                <section className="actCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="actCard-price">
                  <div className="price">
                    <del>8000</del> 5999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section>
        </section>

        <section className="party" id="par">
          <section className="parCard-container">
            <section className="parCard">
              <img className="parCard-img" src={DiffStyle} alt="Titan" />
              <div className="parCard-details">
                <h3 className="parCard-title">Titan Watch</h3>
                <section className="parCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="parCard-price">
                  <div className="price">
                    <del>7000</del> 4999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="parCard-container">
            <section className="parCard">
              <img className="parCard-img" src={DiffStyle} alt="Titan" />
              <div className="parCard-details">
                <h3 className="parCard-title">Titan Watch</h3>
                <section className="parCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="parCard-price">
                  <div className="price">
                    <del>7000</del> 4999/-
                  </div>
                  <div className="bag">
                    <BsFillBagHeartFill className="bag-icon" />
                  </div>
                </section>
              </div>
            </section>
          </section>
          <section className="parCard-container">
            <section className="parCard">
              <img className="parCard-img" src={DiffStyle} alt="Titan" />
              <div className="parCard-details">
                <h3 className="parCard-title">Titan Watch</h3>
                <section className="parCard-reviews">
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <AiFillStar className="rating-star" />
                  <span className="total-reviews"> 5</span>
                </section>
                <section className="parCard-price">
                  <div className="price">
                    <del>7000</del> 4999/-
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
  );
}
