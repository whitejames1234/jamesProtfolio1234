import {  css, html, react, tailwaind, javascript, } from "../assets/index";
import styles from "./style";



function Featued() {
  return (
    <section className= {` ${styles.section} bg-primary py-[80px]`} >

      <div className=" grid grid-flow-col items-center " >
      {/* box-01 */}
      <div className=" flex items-center gap-5 md:gap-10 " >

        <div className= {` w-[8px] h-[50px] order-1 bg-secondary `} ></div>
      <h4 className={styles.smallHeading} >Tech Stack</h4>
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-5 items-center gap-5 " >
          <img src={` ${react} `} alt="react js logo" className= "w-[50px] h-auto " />
          <img src={` ${tailwaind} `} alt="react js logo" className= " w-[50px] h-auto " />
          <img src={` ${html} `} alt="react js logo" className= " w-[50px] h-auto " />
          <img src={` ${css} `} alt="react js logo" className= " w-[50px] h-auto " />
          <img src={` ${javascript} `} alt="react js logo" className= " w-[50px] h-auto  " />
      </div>

      </div>
    </section>
  )
}

export default Featued
