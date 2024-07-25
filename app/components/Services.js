'use client'
import React from 'react';
import Mulitple from './Mulitple';
import HomeDisplayImage from '../components/HomeDisplayImages';
import PhneBag from '../../public/images/Phnes.png';
import Jab from '../../public/images/Jab.png';
import Image from 'next/image';
import '../HomeDisplayingImage.css';
import '../Testimonials.css';



const Services = () => {
  return (
    <div className='w-[90%] mx-auto mt-10'>
    
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 justify-between items-start mt-10 mb-16'>
         
        <div>
          <h1 className='text-[#FB7902] text-[25px] font-medium mb-4'>By Categories</h1>
          <p className='mb-3'>Makeup</p>
          <p className='mb-3'>Hair</p>
          <p className='mb-3'>Skincare</p>
          <p className='mb-3'>Waxing</p>
          <p className='mb-3'>Spa</p>
        </div>

        <div>
          <h1 className='text-[#FB7902] text-[25px] font-medium mb-4'>By Collections</h1>
          <p className='mb-3'>Phnes Bags</p>
          <p className='mb-3'>JaB Jewelries</p>
          <p className='mb-3'>Doris C. Haven</p>
          <p className='mb-3'>Ama Clothing Shop</p>
          <p className='mb-3'>Judenre Hairline</p>
        </div>
        <Image src={PhneBag} alt='PhneBag' className='w-[100%]'/>
        <Image src={Jab} alt='Jab' className='w-[100%]'/>
        </div> 

        <button className='bg-[#000] text-white text-center flex py-2 px-6 rounded-sm mx-auto '>Book Now</button>
        <div>
            <HomeDisplayImage/>
        </div>


      <Mulitple/>
    </div>
  )
}

export default Services
