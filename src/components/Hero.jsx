import styles from "./style";
import {heroImg,  welcome} from "../assets/index";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"




function Hero() {
  return (
    <section className={`${styles.section} bg-primary  `} >
      <div className=" grid grid-flow-row md:grid-cols-2 items-center gap-[60px] pt-[80px] pb-[80px] " >

        {/* 01 */}
      <div className="flex flex-col gap-[10px] leftContainer" >
        <div className=" flex items-center gap-2" >
        <img src= {`${welcome} `} alt="welcom icon" className="w-[25px] h-auto " />
        <h4 className={styles.smallHeading}  > Hi! this is <span className="text-secondary"> Rida-white </span></h4>
        </div>
        <h2 className={styles.mainHeading} > let Get Your <span className="text-secondary" > Ideas </span> 
        To  <span className="text-secondary" > The Real World </span> With The Latest 
        <span className="text-secondary"> Technology </span>
        </h2>
        <p className= {`${styles.mainText} mt-4 `} > 
        Welcome to James White portfolio Elevating
         Experiences with React and Tailwind CSS. Explore the
          Intersection of Design and Technology to give our users/clients the
         best User Experience they can get in the web world.
         </p>

         <div className="flex iteme-center gap-10 mt-4 " >
          <NavLink to="/#" className={` ${styles.mainText}  ${styles.btn}  `} > Contact </NavLink>
          <NavLink to="/#" className={`!bg-primary border-2 border-yellow-50 ${styles.mainText} ${styles.btn}  `} >About</NavLink>
         </div>

      </div>


      {/* div 02 */}
      <motion.div 
       animate={{opacity: 1}}
       className="overflow-hidden flex justify-center w-full bg-primaryDark border-2 lg:border-4 border-secondary rounded-tl-[100px] rounded-br-[100px] " >
        <img src= {`${heroImg}`} alt="hero image" className="min-w-[270px] h-auto w-full max-w-[460px] " />
        
      </motion.div>


      </div>

    </section>
  )
}

export default Hero
