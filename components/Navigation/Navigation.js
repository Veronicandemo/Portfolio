import React, { useRef ,useContext, useState} from "react";
import AppContext from "../store/AppContext";
import NavLink from "@/utils/NavLink";
import classes from "./Navigation.module.css";
import SocialLinks from "@/utils/SocialLinks";
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'


export default function Navigation() {
  const [showMenu,setShowMenu]=useState(true)
  //Creating contex
  const ctx=useContext(AppContext)
  function openSideBar(){
    setShowMenu(false)
    ctx.showSideBarHandler()
  }
  function closeMenuHandler(){
    setShowMenu(true)
    ctx.hideSideBar()
  }
 
  const linksInput = useRef();
  return (
    <div className={ctx.homeIsIntersecting?classes.navigation_fixed:classes.navigation}>
      <div className={classes.menuIcons}>
        {showMenu?<FiMenu className={classes.icon} onClick={openSideBar}/>:<MdClose className={classes.icon} onClick={closeMenuHandler}/>}
      </div>
      <div ref={linksInput} className={classes.nav_links}>
        <NavLink href="#" >Home</NavLink>
        <NavLink href="#" >About</NavLink>
        <NavLink href="#">Service</NavLink>
        <NavLink href="#" >Projects</NavLink>
        <NavLink href="#" >Contact</NavLink>
      </div>
      <div className={classes.soccial_links}>
        <SocialLinks />
      </div>
    </div>
  );
}
