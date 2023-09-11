import React from "react";
import "./Category.css";
function Category() {
  let count = 0;
  const handleClickCategory =()=>{
    if(count===1){
      document.getElementById('cat').style.display='none';
      count=0
    }else{

      document.getElementById('cat').style.display='flex';
      count+=1;
    }
     

  }
  return (
    <>
    <div className="sidebarComponent " >
      <div className="title" >
        <span className="sidebar-title" onClick={handleClickCategory}>Category</span>
        <div className="CategoryVontent" id="cat">
          <ul>
            <li><input type="checkbox" name="men" id="men" /> Men</li>
            <li><input type="checkbox" name="woman" id="women" /> Women</li>
            <li><input type="checkbox" name="kids" id="kids" /> Kids</li>
            
          </ul>
        </div>
      </div>
      {/* <div className="plus">
        <span>+</span>
      </div> */}
    </div>
    </>
  );
}

export default Category;
