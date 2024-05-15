import { useState } from "react";
import {  logo } from "../assets/index";
import styles from "./style";
import {sitLinks} from "../data";
import { motion } from "framer-motion"


import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLink } from "react-router-dom";

function Nav() {
const [togale , setTogale] = useState(false);

  return (
    <header className=" bg-primaryDark border-2 md:border-4 border-secondary relative  " >

      <div className=" px-5 ss:px-10 md:px-[80px] lg:px-[100px] flex justify-between items-center my-[10px] " >
      {/* header logo */}
      <img src={` ${ logo}`} alt="rida labiad logo" className="w-[136px] ss:w-[146px] lg:w-[220px] h-auto " />
      
      {/* mobile menu/slose icons */}
      <div className=" cursor-pointer md:hidden w-[30px]  z-10 "  
      onClick={()=>(setTogale(!togale)) } > 
      { togale ? <CloseIcon sx={{ color:"white", fontSize: 34,"&:hover": {color: "#FFD700"} }} /> 
      : <MenuIcon sx={{ color:"white", fontSize: 34 ,transition: "all" , "&:hover": {color: "#FFD700"} } }  /> }  
      </div>
      { togale && <motion.nav className="absolute  bg-primary border-b-2 border-l-2 border-secondary  top-0 right-0 w-3/4  z-0 " > 

       <ul className=" flex flex-col items-center gap-4 mt-[60px] mb-[40px] " > 
       {sitLinks.map((link, i)=> <li key={i} 
       className= {`font-semibold	 cursor-pointer hover:text-secondary transition-colors duration-500
       	ease-in-out	 ${styles.mainText}`} >{link} </li> ) }
       </ul>
      </motion.nav> }


      {/* desktop nav links verging */}
      <ul className=" hidden md:flex gap-8 " > 
      {sitLinks.map((link, i)=> <li key={i} className= {`font-semibold 	cursor-pointer hover:text-secondary transition-colors
       duration-500	ease-in-out	 ${styles.mainText}`} >{link} </li> ) }
      </ul>

     <div className="hidden md:flex items-center gap-6  " >
     <select name="lange" className=" bg-transparent fill-none text-[14px] text-yellow-50 font-semibold px-2 py-2 border-2 border-yellow-50 " >
        <option value="english" className=" bg-primary ">Eng</option>
        <option value="arabic" className="bg-primary ">Arb</option>
      </select>
      <NavLink to="/#" className={`hidden md:flex !text-primaryDark font-semibold	 bg-secondary px-[24px] py-[10px] border-2 border-yellow-50
       ${styles.mainText}  `} > Protgolio</NavLink>
      </div>
     

      </div>

      
    </header>
  )
}

export default Nav
