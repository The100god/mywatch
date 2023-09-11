import React from 'react'
import './footer.css'
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs"

export default function footer() {
  return (
    <>
    <section className="foot">
        <div className="footerMail">
            <input type="email" name="Email" id="email" placeholder='Enter your E-mail'/>
            <div className="signUpMail">
                signUp
            </div>
        </div>
        <section className="footerContent">
            <div className="helpContent content">
                <h3 className="helpTitle footerTitle">HELP</h3>
            <div className="helpListContent footerListContent">
                <ul>
                    <li><a href="/">1-888-963-8944</a></li>
                    <li><a href="/">1-000-000-0000 </a>(Text)</li>
                    <li><a href="/">help@mywatch.com</a></li>
                    <li><a href="/">Returns/Exchanges</a></li>
                    <li><a href="/">FAQ/Contact Us</a></li>
                    
                </ul>
            </div>
            </div>
            <div className="shopContent content">
                <h3 className="ShopTitle footerTitle">SHOP</h3>
            <div className="shopListContent footerListContent">
                <ul>
                    <li><a href="/">Men's Watch</a></li>
                    <li><a href="/">Women's Watch </a></li>
                    <li><a href="/">Gift Cards</a></li>
                    <li><a href="/">Refer a Friend</a></li>
                    <li><a href="/">Download the MyWatch App</a></li>
                    
                </ul>
            </div>
            </div>
            <div className="aboutContent content">
                <h3 className="aboutTitle footerTitle">ABOUT US</h3>
            <div className="aboutListContent footerListContent">
                <ul>
                    <li><a href="/">Our Stores</a></li>
                    <li><a href="/">Our Story</a></li>
                    <li><a href="/">Our Materials</a></li>
                    <li><a href="/">Sustainability</a></li>
                    <li><a href="/">Investors</a></li>
                    <li><a href="/">Watch Care</a></li>
                    <li><a href="/">Partnerships</a></li>
                    <li><a href="/">Product Testing</a></li>
                    <li><a href="/">Bulk Orders</a></li>
                    <li><a href="/">Careers</a></li>
  
                </ul>
            </div>
            </div>
        </section>

        <div className="social">
            <h2>Follow On</h2>
            <div className="social-icon">
            <BsInstagram className="insta media-icon"/>
            <BsFacebook className="facebook media-icon"/>
            <BsTwitter className="twitter media-icon"/>
            </div>
        </div>

        <div className="copyright">
            <footer>copyright &copy: 2023 MyWatch, Inc. All Rights Reserved. <a href="/">Terms</a>, <a href="/">Privacy</a> & <a href="/">Accessibility</a>. Do Not Sell My Personal Information.</footer>
        </div>

    </section>
      
    </>
  )
}
