import React from 'react'
import './Features.css'

export default function Features() {

  let count = 0;
  const handleClickFeature =()=>{
    if(count===1){
      document.getElementById('feat').style.display='none';
      count=0
    }else{

      document.getElementById('feat').style.display='flex';
      count+=1;
    }
  }

  return (
    <>
      <div className="sidebarComponent">
      <div className="title">
        <span className="sidebar-title" onClick={handleClickFeature}>Features</span>
        <div className="featureContent" id="feat">
          <ul>
            <li><input type="checkbox" name="Color" id="Color" /> Color</li>
            <li><input type="checkbox" name="Alarm" id="Alarm" /> Alarm</li>
            <li><input type="checkbox" name="Basic" id="Basic" /> Basic</li>
            <li><input type="checkbox" name="Smart" id="Smart" /> Smart </li>
            <li><input type="checkbox" name="Classic" id="Classic" /> Classic</li>
            <li><input type="checkbox" name="Brand" id="Brand" /> Brand</li>
          </ul>
        </div>
      </div>
      
    </div>
    </>
  )
}
