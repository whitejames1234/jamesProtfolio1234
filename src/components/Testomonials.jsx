import styles from "./style";
import StarRateIcon from '@mui/icons-material/StarRate';
import {testomonials} from '../data';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperNavButton from "./SwiperNavButton";


function Testomonials() {
  return (
    <section className= {`${styles.section} bg-primary py-[80px] `} >
   {/* Section Name */}
      <div className="flex items-center gap-4 mb-[40px]  " >
            <div className="w-[8px] h-[36px] bg-secondary " ></div>
            <h4 className={` ${styles.mediumHeading} text-yellow-50 `} >Testomonials</h4>
      </div>


<Swiper className='relative cursor-grab flex flex-col  '
    spaceBetween={40}
    slidesPerView={1}
    breakpoints={{ 1000: { slidesPerView: 2 } }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)} >

{ testomonials.map((item)=> <SwiperSlide>
<div className="bg-primaryDark  border-secondary border-2 md:border-4 py-5 px-5 ss:px-10 ss:py-10 flex flex-col gap-5 " >
 <div className="flex items-center " >
  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
 </div>

 <p className=" text-[16px] text-yellow-50 " >{item.constent} </p>
  <div className="flex items-center gap-6 " > <img src={`${item.img} `}  alt="person" className="w-[60px] h-auto rounded-lg	 " /> <div>
     <h5 className="text-[18px] font-bold text-yellow-50  " > {item.name} </h5>
     <p className=" text-[14px] text-yellow-50  " >{item.job}</p>
    </div>
  </div>
</div>
</SwiperSlide>) }
<SwiperNavButton />
</Swiper>



</section> )
}

export default Testomonials

// testomonials.map((item)=> (<div className=" min-w-[400px] bg-primaryDark border-secondary border-4 py-[30px] px-[30px] " >

// <div className="flex items-center " >
//  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
//  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
//  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
//  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
//  <StarRateIcon sx={{ color:"#FFD700",fontSize:26, }} />
// </div>

// <p className=" text-[16px] text-yellow-50 " >{item.constent} </p>
//  <div className="flex items-center gap-6 " > <img src={`${item.img} `}  alt="person" className="w-[60px] h-auto rounded-lg	 " /> <div>
//     <h5 className="text-[18px] font-bold text-yellow-50  " > {item.name} </h5>
//     <p className=" text-[14px] text-yellow-50  " >{item.job}</p>
//    </div>
//  </div>
//  </div>))