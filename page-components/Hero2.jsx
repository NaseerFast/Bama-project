import Image from "next/image";
import Container from "../page-components/UI/container";

// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // Import the Autoplay module
import heroImg from "../public/img/zullum.jpg";
import heroImg2 from "../public/img/hongrema3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
 // Import Swiper styles

// Install Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const HeroTwo = () => {

 
  return (
    <>
    <Swiper
    
    spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={false}
       modules={[Autoplay, Pagination, Navigation]}
       // onAutoplayTimeLeft={onAutoplayTimeLeft}
       className="mySwiper"
  >
   

<SwiperSlide>
     {/* <Container className="flex flex-wrap "> */}

    <section className="px-3 py-5 bg-neutral-100 lg:py-10">
  <div className=" grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-1 flex flex-col justify-center items-center pl-8">
    <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight  xl:leading-tight dark:text-white">
           
           Welcome to the Bama Education Empowerment Programme (BAM-POWER) Portal
           </h1>
           <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
           &#8220;We must invest in education to ensure that our children have the skills and knowledge they need to succeed in life.&#8221; – <span className="font-medium text-gray-700">His Excellency Prof. Babagana Umara Zulum mni Executive Governor of Borno State</span>

           </p>
           
           <a
                href="https://forms.gle/M97UZ7iPtsUeDHkU7"
                
                rel="noopener"
                className=" mt-3 px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Start Application
              </a>    </div>
    <div className="order-1 lg:order-2">
      <img className="h-80 w-80 object-cover lg:w-[600px] lg:h-[600px]" src="/img/zullum.jpg" alt=""/>
    </div>
  </div>
</section>

{/* </Container> */}
</SwiperSlide>

<SwiperSlide>
     {/* <Container className="flex flex-wrap "> */}
     <section className="px-3 py-5 bg-neutral-100 lg:py-10">
  <div className=" grid lg:grid-cols-2 items-center justify-items-center gap-5">
    <div className="order-2 lg:order-1 flex flex-col justify-center items-center pl-8">
    <h1 className="text-2xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight  xl:leading-tight dark:text-white">
           
           Welcome to the Bama Education Empowerment Programme (BAM-POWER) Portal
           </h1>
           <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
           &#8220;BAM-Power is a strategic initiative focused on educating and empowering young people and children across Bama Local Government Area in Borno State. Aligned with Babagana Zulum's development plans, it aims to enhance lives positively. &#8221; -<span className="font-medium text-gray-700"> Honourable Grema Terab, Chairman Bama Local Government</span>
           </p>
           <a
                href="https://forms.gle/M97UZ7iPtsUeDHkU7"
                
                rel="noopener"
                className=" mt-3 px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Start Application
              </a>    </div>
    <div className="order-1 lg:order-2">
      <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="/img/hongrema3.jpeg"  alt=""/>
    </div>
  </div>
</section>


{/* </Container> */}
</SwiperSlide>
</Swiper>
</>
  );


    }


export default HeroTwo;