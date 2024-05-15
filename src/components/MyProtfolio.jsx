import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import styles from "./style";
import {projects} from '../data';

function MyProtfolio() {
  return (
    <section className={`bg-primaryDark ${styles.section} py-[80px]`}  >

{/* ==== Section-Name ==== */}
    <div className=' flex items-center gap-12 mb-12 ' >
      <div className='h-[60px] w-[10px] bg-yellow-50 ' ></div>
      <h3 className={styles.mediumHeading} >My protfolio</h3>
    </div>

{/* ==== Protfolio-Projects-Carts-Container ==== */}
  <div className=" flex flex-col gap-10 md:gap-16 items-center  ">
{/* cart */}
    {
      projects.map((item)=>(
        <div className='grid gap-2  border-2 md:border-4  border-secondary grid-cols-1 md:grid-cols-2 items-center ' >
        <div className="bg-primary w-full min-h-[220px] lg:h-[300px] h-full md:border-r-4 border-secondary cursor-pointer  "></div>
        <div className=" px-5 ss:px-10 py-5 ss:py-10 flex flex-col  " >
          <h3 className={styles.mediumHeading} > {item.title} </h3>
          <p className={styles.mainText}>{item.decription} </p>
           <Link to={''} ><GitHubIcon sx={{ color:'white', fontSize:30, }} /> </Link> 
        </div>
    </div>
      ) )
    }



      </div>
    </section>
  )
}

export default MyProtfolio
