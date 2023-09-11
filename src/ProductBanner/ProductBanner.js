import React from 'react'
import './ProductBanner.css'
import men from "../img/mw1.jpg"
import women from "../img/ww1.jpg"

function ProductBanner() {
  return (
    <>
    <section className="Banner">
        <div className="moto">
            <span>"Give time to your precious once."</span>
        </div>
        <div className="BannerImg">
            <img src={men} alt="men's" />
            <div className="shop shopMen">
                <a href="/">Shop for Men</a>
            </div>
        </div>
        <div className="BannerImg">
            <img src={women} alt="women's" />
            <div className="shop shopWomen">
                <a href="/">Shop for Women</a>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default ProductBanner;