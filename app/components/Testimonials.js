'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import OurStory1 from '../../public/images/ourstory1.png';

import 'swiper/css';
import 'swiper/css/pagination';

import '../Testimonials.css';

import { Pagination } from 'swiper/modules';

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:items-start lg:my-16 my-10'>
                <Image src={OurStory1} alt='OurStory1' className='md:w-[70%] mx-auto' priority/>
                <div>
                    <p className='text-[#4A4A4A] my-4'>TESTIMONIALS</p>
                    <h1 className='font-medium text-3xl my-2'>Daphne Augustine</h1>
                    <h3 className='text-[#4A4A4A] mt-2 mb-6'>Accra | Beautician</h3>
                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. </p>

                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.</p>
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:items-start lg:my-16 my-10'>
                <Image src={OurStory1} alt='OurStory1' className='md:w-[70%] mx-auto' priority/>
                <div>
                    <p className='text-[#4A4A4A] my-4'>TESTIMONIALS</p>
                    <h1 className='font-medium text-3xl my-2'>Daphne Augustine</h1>
                    <h3 className='text-[#4A4A4A] mt-2 mb-6'>Accra | Beautician</h3>
                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. </p>

                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.</p>
                </div>
            </div>
        </SwiperSlide>





        <SwiperSlide>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:items-start lg:my-16 my-10'>
                <Image src={OurStory1} alt='OurStory1' className='md:w-[70%] mx-auto' priority/>
                <div>
                    <p className='text-[#4A4A4A] my-4'>TESTIMONIALS</p>
                    <h1 className='font-medium text-3xl my-2'>Daphne Augustine</h1>
                    <h3 className='text-[#4A4A4A] mt-2 mb-6'>Accra | Beautician</h3>
                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. </p>

                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.</p>
                </div>
            </div>
        </SwiperSlide>





        <SwiperSlide>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:items-start lg:my-16 my-10'>
                <Image src={OurStory1} alt='OurStory1' className='md:w-[70%] mx-auto' priority/>
                <div>
                    <p className='text-[#4A4A4A] my-4'>TESTIMONIALS</p>
                    <h1 className='font-medium text-3xl my-2'>Daphne Augustine</h1>
                    <h3 className='text-[#4A4A4A] mt-2 mb-6'>Accra | Beautician</h3>
                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. </p>

                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.</p>
                </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
            <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:items-start lg:my-16 my-10'>
                <Image src={OurStory1} alt='OurStory1' className='md:w-[70%] mx-auto' priority/>
                <div>
                    <p className='text-[#4A4A4A] my-4'>TESTIMONIALS</p>
                    <h1 className='font-medium text-3xl my-2'>Daphne Augustine</h1>
                    <h3 className='text-[#4A4A4A] mt-2 mb-6'>Accra | Beautician</h3>
                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Serene Beauty isn’t just any other salon. It’s a complete cut above the rest. Every visit is always a treat and you’re always made to feel special. </p>

                    <p className='text-[#4A4A4A] my-4 md:w-[70%] ourstoryp'>Sarah never takes her customers for granted and she strives to always deliver something above and beyond ordinary expectations. I cannot recommend Serene Beauty highly enough.</p>
                </div>
            </div>
        </SwiperSlide>


      </Swiper>
    </>
  );
}
