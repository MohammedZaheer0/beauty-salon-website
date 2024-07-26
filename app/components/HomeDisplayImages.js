'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import HomeDisplayImage1 from '../../public/images/homedisplayimg1.png';
import HomeDisplayImage2 from '../../public/images/homedisplayimg2.jpg';
import '../HomeDisplayingImage.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper mt-16 w-[100%] md:h-[80vh] mx-auto flex justify-between items-center"
      >
        <SwiperSlide><Image src={HomeDisplayImage1} alt='HomeDisplayImage1' className='w-[100%]'/> </SwiperSlide>
        <SwiperSlide><Image src={HomeDisplayImage2} alt='HomeDisplayImage2' className='w-[100%]'/> </SwiperSlide>
        <SwiperSlide><Image src={HomeDisplayImage1} alt='HomeDisplayImage1' className='w-[100%]'/> </SwiperSlide>
      </Swiper>
    </>
  );
}
