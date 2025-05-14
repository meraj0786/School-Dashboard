import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { RiDashboardFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaLock } from "react-icons/fa6";


function Sidebar() {
  const [isActiveTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setToggleSubmenu] = useState(false);

  function isOpenSubmenu(val) {
    setActiveTab(val);
    setToggleSubmenu(!isToggleSubmenu);
  }
  return (
    <>
      <div className='sidebar'>
        <ul>
          <li>
            <Button className={`w-100 ${isActiveTab === 0 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
              <span className='icon'><RiDashboardFill /></span>
              Dashboard
              <span className='arrow'><IoIosArrowForward /></span>
            </Button>
          </li>
          <li>
            <Button className={`w-100 ${isActiveTab === 1 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
              <span className='icon'><MdOutlineProductionQuantityLimits /></span>
              Product
              <span className='arrow'><IoIosArrowForward /></span>
            </Button>
            <div className={`submenuWrapper ${isActiveTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
              <ul className='submenu'>
                <li><Link to="/">Product List</Link></li>
                <li><Link to="#">Product View</Link></li>
                <li><Link to="#">Product Upload</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Button className={`w-100 ${isActiveTab === 2 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
              <span className='icon'><IoMdCart /></span>
              Orders
              <span className='arrow'><IoIosArrowForward /></span>
            </Button>
             <div className={`submenuWrapper ${isActiveTab === 2 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
              <ul className='submenu'>
                <li><Link to="/orderGraphDemo">order List</Link></li>
                <li><Link to="/orderGraph">Order View</Link></li>
                <li><Link to="#">Order status</Link></li>
              </ul>
            </div>
          </li>
          <li>
            <Button className={`w-100 ${isActiveTab === 3 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
              <span className='icon'><MdMessage /></span>
              Messages
              <span className='arrow'><IoIosArrowForward /></span>
            </Button>
          </li>
          <li>
            <Button className={`w-100 ${isActiveTab === 4 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
              <span className='icon'><IoNotifications /></span>
              Notifications
              <span className='arrow'><IoIosArrowForward /></span>
            </Button>
          </li>
          <li>
            <Button className={`w-100 ${isActiveTab === 5 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}>
              <span className='icon'><IoSettingsSharp /></span>
              Settings
              <span className='arrow'><IoIosArrowForward /></span>
            </Button>
          </li>
        </ul>
        <div className='logoutwrapper'>
          <div className='logoutBox'>
            <Button variant="contained">
              <FaLock />Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;