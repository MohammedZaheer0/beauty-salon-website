'use client';
import React, { useEffect } from 'react';
import HomeDisplayImage from '../components/HomeDisplayImages';
import Mulitple from './Mulitple';
import '../Testimonials.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  useEffect(() => {
    // Create GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main", 
        start: "top 100%", 
        end: "bottom 0%",
        scrub: true,
      }
    });
    
    // Define the animation
    tl.fromTo(".main", 
      { opacity: 1, scale: 0.5 }, // Start state
      { opacity: 1, scale: 1, duration: 1 } // End state
    );
  }, []);

  return (
    <div className='w-[90%] mx-auto mt-10'>
      <h1 className='text-[#4A4A4A] text-center'>Where Tranquility Meets Transformation.</h1>
      <h1 className='my-7 text-center lg:text-5xl text-3xl sm:text-4xl md:w-[80%] lg:w-[50%] mx-auto linehieght'>
        We show your <span className='text-[#FB7902]'>skin, hair,</span> and <span className='text-[#FB7902]'>body</span> the care and attention they deserve.
      </h1>
      <button className='bg-[#000] text-white text-center flex py-2 px-6 rounded-sm mx-auto'>Book Now</button>
      <div className='main opacity-0 scale-50'>
        <HomeDisplayImage />
      </div>

      <Mulitple />
    </div>
  );
}

export default Home;