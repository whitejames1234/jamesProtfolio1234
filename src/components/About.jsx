import styles from "./style";
import {about} from "../assets/index";
import {fiverr, upwork } from "../assets/index";
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function About() {
  return (
    <section className= {` ${styles.section} bg-primary py-[70px] `} >
      <div className=" grid grid-flow-row md:grid-flow-col items-center	 gap-8 lg:gap-14 "  >

<div className="bg-cover bg-center border-2 lg:border-4 border-secondary mb-[30px] " >
  <img src= {`${about}`} alt="about-image" className=" w-full" />
</div>


<div>
<div className="flex items-center gap-4 mb-[20px] " >
            <div className="w-[8px] h-[36px] bg-yellow-50 " ></div>
            <h4 className={` ${styles.mediumHeading}`} >Who Are We</h4>
</div>

<p className={`${styles.mainText}`}>
          Hi! I James White 21 Years Old, Am A Frond-End React 
          Developer That Can Also Do Web Design At The Same Time,
          Im Somone That Like To Get Thing   Done And This
          Make Trust More Of My Selfe The Thing That Makes Me
          Happy Every Time I Do That,  I Have Been Doing This
          Since  2021 Means I Have More Than 2 Years Of Experience
          , I Liked Everything About The Web And Technology From My
          First Time  I Touch Computer With My Hand, Im Somone That
          Easy To Work With That What Other People Say About Me So What
          You Waiting For Let's Get That Job Done Today  
          </p>

          <div className="flex items-center gap-10 mt-[30px] ">
          <a href="https://www.fiverr.com/ridalabiad?up_rollout=true" target='_blank' className=' bg-secondaryDark px-[22px] py-4 ' > 
          <img src={fiverr} alt="fiver logo" className='w-[22px] h-[20px]  ' /> </a> 
          <a href="https://www.upwork.com/nx/find-work/best-matches" target='_blank' className=' bg-secondaryDark px-[22px] py-4 ' > 
          <img src={upwork} alt="fiver logo" className='w-[22px] h-[20px] ' /> </a> 
          <a href="#" className="bg-secondaryDark px-[22px] py-4" ><LinkedInIcon sx={{height:"20px", width:"22px", color:"white" }} /> </a>
          </div>
</div>

      </div>
    </section>
  )
}

export default About
