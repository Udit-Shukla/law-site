import React from "react";
import { BiAlignJustify } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isHidden, setIsHidden] = React.useState(false);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className='sidebar' onClick={handleToggle}>
      <div className='sidebar-logo' >
        <BiAlignJustify />
      </div>
      <div className={`sidebar-list ${isHidden ? 'hidden' : ''}`}>
        <div className='sidebar-list-item'>
          <Link to='./pages/ContactUs'>Contact Us</Link>
        </div>
        <div className='sidebar-list-item'>
          <Link to='./pages/AboutUs'>About Us</Link>
        </div>
        <div className='sidebar-list-item'>
          <Link to='./pages/Expertise'>Expertise</Link>
        </div>
        <div className='sidebar-list-item'>
          <Link to='./pages/Success'>Success</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
