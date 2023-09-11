import React from "react";
import "./Nav.css";
// import {FiHeart} from 'react-icons/fi';
import {
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose
} from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav() {
  const handelResponsNavbar =()=>{
    document.getElementById("resNav").style.display="block";
  }

  const handleCloseNav =()=>{
    document.getElementById("resNav").style.display="none";
  }

  const handleResponseSearch =()=>{
    document.getElementById("sBar").style.display="block";
    document.getElementById("remove").style.display="block";
    document.getElementById("appear").style.display="none";
  }
  const handleRemoveSearch =()=>{
    document.getElementById("sBar").style.display="none";
    document.getElementById("remove").style.display="none";
    document.getElementById("appear").style.display="block";
    
  }
  return (
    <nav>
    <div className="hamburger" onClick={handelResponsNavbar} >
    <GiHamburgerMenu className="burger"/>
    </div>
      <div className="topnav" id="resNav">
      <AiOutlineClose className="close" id="cut" onClick={handleCloseNav}/>
        {/* <div id="myLinks" className="navbar"> */}
        <ul>
          <li><a href="/">Man</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">Kids</a></li>
          <li><a href="/">Sale</a></li>
          <li><a href="/">Help</a></li>
          <li><a href="/">Cart</a></li>
          </ul>
        {/* </div> */}
      </div>
      <div className="profile-container left">
        <ul>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">Kids</a>
          </li>
          <li>
            <a href="/">Sale</a>
          </li>
        </ul>
      </div>

      <div className="profile-container mid">
        <div className="logo">My Watch</div>
      </div>
      {/* <div className="nav-container">
        <input type="text" className='search-input' placeholder='Enter your search watch.' />
      </div> */}
      <div className="profile-container right">
      <div className="searchBar" id="sBar">
        <input type="search" name="searchBar" id="sarBar" placeholder="Search...."/>
      </div>
      <div className="removeSearch" id="remove">
          <AiOutlineClose className="nav-icons" onClick={handleRemoveSearch}/>
      </div>
      <div className="search" id='appear'>
          <AiOutlineSearch className="nav-icons" onClick={handleResponseSearch}/>
      </div>
      <div className="user">

        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      <div className="helpIcon">

        <a href="/">
          <BiHelpCircle className="nav-icons" />
        </a>
      </div>
      <div className="cart">

        <a href="/">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
      </div>
      </div>
    </nav>
  );
}

export default Nav;
