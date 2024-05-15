import styles from "./style";
import { webDev, webDesing} from "../assets/index";

function Service() {
  return (
    <section className= {`${styles.section} bg-primary py-[80px] `} >

      {/* Section Name */}
        <div className="flex items-center gap-4 mb-[20px] " >
            <div className="w-[8px] h-[36px] bg-yellow-50 " ></div>
            <h4 className={` ${styles.mediumHeading}`} >Our Service</h4>
          </div>

       {/* Service Cards */}
          <div className=" grid gap-[50px] grid-cols-1 md:grid-cols-2 justify-between items-center " >

            <div className=" bg-primaryDark border-2 lg:border-4 border-secondary px-6 py-6 ss:px-10 ss:py-10  " >
              <img src={ webDev} alt="" className="max-h-[60px] mb-[20px] "  />
              <h4 className={` ${styles.smallHeading} `}  >The Front End</h4>
              <p className= {`${styles.mainText} `} >Welcome to James portfolio Elevating Welcome to James portfolio Elevating Welcome to James </p>
            </div>

            <div className=" bg-primaryDark border-2 lg:border-4 border-secondary px-6 py-6 ss:px-10 ss:py-10  " >
            <img src={ webDesing} alt="" className="max-h-[60px] mb-[20px]  " />
              <h4 className={` ${styles.smallHeading} `}  >Web Desing</h4>
              <p className= {`${styles.mainText} `} >Welcome to James  portfolio Elevating Welcome to James  portfolio Elevating Welcome to James White's</p>
            </div>
            
          </div>_
      
    </section>
  )
}

export default Service
