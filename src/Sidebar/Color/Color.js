import React from 'react'
import './Color.css'

function Color() {
  let count = 0;
  const handleClickColor =()=>{
    if(count===1){
      document.getElementById('cot').style.display='none';
      count=0
    }else{

      document.getElementById('cot').style.display='flex';
      count+=1;
    }
  }
  return (
    <>
      <div className="sidebarComponent">
      <div className="title">
        <h2 className="sidebar-title" onClick={handleClickColor}>Color</h2>
        <div className="colorContent" id="cot">
          <ul>
            <li><input type="checkbox" name="silver" id="silver" /> silver</li>
            <li><input type="checkbox" name="gold" id="gold" /> Gold</li>
            <li><input type="checkbox" name="White" id="White" /> White</li>
            <li><input type="checkbox" name="Black" id="Black" /> Black</li>
            <li><input type="checkbox" name="Red" id="Red" /> Red</li>
            <li><input type="checkbox" name="Pink" id="Pink" /> Pink</li>
          </ul>
        </div>
      </div>
      {/* <div className="plus">
        <span>+</span>
      </div> */}
    </div>
    </>
  )
}


export default Color;