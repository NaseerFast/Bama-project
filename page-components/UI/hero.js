import Image from "next/image";
import Container from "./container";
import heroImg from "../../public/img/zullum.jpg";
import heroImg2 from "../../public/img/grema.jpg";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // Import the Autoplay module

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
 // Import Swiper styles

// Install Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Hero = () => {
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
      <Container className="flex flex-wrap ">

      <div className=" block lg:hidden flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>


        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight  xl:leading-tight dark:text-white">
           
            Welcome to the Bama Education Empowerment Programme (BAM-POWER) Portal
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            &#8220;We must invest in education to ensure that our children have the skills and knowledge they need to succeed in life.&#8221; – <span className="font-medium text-gray-700">His Excellency Prof. Babagana Umara Zulum mni Executive Governor of Borno State</span>

            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/application"
                
                rel="noopener"
                className=" mt-3 px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Start Application
              </a>
              {/* <a
                href="#"
                
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                {/* <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg> *
                <span> Read more</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className=" hidden lg:block flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

        
      </Container>
      </SwiperSlide>

      <SwiperSlide>
      <Container className="flex flex-wrap ">

      <div className=" block lg:hidden flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg2}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight  xl:leading-tight dark:text-white">
           
            Welcome to the Bama Education Empowerment Programme (BAM-POWER) Portal
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            &#8220;BAM-Power is a strategic initiative focused on educating and empowering young people and children across Bama Local Government Area in Borno State. Aligned with Babagana Zulum's development plans, it aims to enhance lives positively. &#8221; -<span className="font-medium text-gray-700"> Honourable Grema Terab, Chairman Bama Local Government</span>

            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/application"
                
                rel="noopener"
                className="mt-3 px-8 py-4 text-lg font-medium text-center text-white bg-green-600 rounded-md ">
                Start Application
              </a>
              {/* <a
                href="#"
                
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                {/* <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg> 
                <span> Read more</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg2}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      </SwiperSlide>

    
    
      </Swiper>
    </>
  );
}



export default Hero;