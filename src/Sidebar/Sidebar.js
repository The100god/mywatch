import React from 'react'
import './Sidebar.css'
import Category from './Category/Category.js'
import Color from './Color/Color.js'
import Features from './Features/Features.js'
import Popularity from './Popularity/Popularity.js'
import Brand from './Brand/Brand.js'
import Price from './Price/Price.js'
import Discount from './Discount/Discount.js'
import Occasion from './Occasion/Occasion.js'
import Functionality from './Functionality/Functionality.js'
import StrapColor from './StrapColor/StrapColor.js'
import StrapMaterial from './StrapMaterial/StrapMaterial.js'
import Availability from './Availability/Availability.js'
import DialColor from './DialColor/DialColor.js'
import DialShape from './DialShape/DialShape.js'
import AllDiscount from './AllDiscount/AllDiscount.js'


function Sidebar() {
  return (
    <>
    <section className="sidebar">
        <Category />
        <Color />
        <Features />
        <Popularity />
        <Brand />
        <Price/>
        <Discount />
        <Occasion />
        <Functionality />
        <StrapColor />
        <StrapMaterial />
        <Availability />
        <DialColor/>
        <DialShape />
        <AllDiscount/>
    </section>
    </>
  )
}

export default Sidebar;