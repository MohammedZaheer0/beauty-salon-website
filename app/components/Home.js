'use client';
import React from 'react';
import HomeDisplayImage from '../components/HomeDisplayImages';
import Image from 'next/image';
import ExploreServices1 from '../../public/images/exploreservice1.png';
import ExploreServices2 from '../../public/images/exploreservice2.png';
import ExploreServices3 from '../../public/images/exploreservice3.png';
import ExploreServices4 from '../../public/images/exploreservices4.png';
// import ExploreServices5 from '../../public/images/exploreservice5.jpg'
import ExploreServices6 from '../../public/images/exploreservice6.png';
import ExploreCollection1 from '../../public/images/explorecollections1.png';
import ExploreCollection2 from '../../public/images/explorecollections2.png';
import ExploreCollection3 from '../../public/images/explorecollections3.png';
import ExploreCollection4 from '../../public/images/explorecollections4.png';
import Testimonials from '../components/Testimonials';



const Home = () => {
  return (
    <div className='w-[90%] mx-auto mt-10'>
        
        <h1 className='text-[#4A4A4A] text-center'>Where Tranquility Meets Transformation.</h1>
        <h1 className='my-7 text-center lg:text-5xl text-3xl sm:text-4xl md:w-[80%] lg:w-[50%] mx-auto linehieght'>We show your <span className='text-[#FB7902]'>skin, hair,</span> and <span className='text-[#FB7902]'>body</span> the care and attention they deserve.</h1>
        <button className='bg-[#000] text-white text-center flex py-2 px-6 rounded-sm mx-auto'>Book Now</button>
        <div>
            <HomeDisplayImage/>
        </div>



        {/* Explore Services */}
        <div>
        <div className='mt-16 mb-10 grid md:grid-cols-[80%_20%]  items-center justify-between'>
                <div >
                    <h1 className='md:text-3xl sm:text-2xl'>Enhance your inner radiance <br /> at our <span className='text-[#FB7902]'>beauty sanctuary</span> and <br /> let your true beauty shine.</h1>
                </div>
                <div>
                <button className='ml-0 bg-[#000] text-white text-center flex py-2 px-6 mt-5 md:mt-0 rounded-sm md:mx-auto '>Explore Services</button>
                </div>
        </div>


        <div className='my-8 grid md:grid-cols-3 sm:gap-5'>
            <div className='my-5 md:my-0'>
                <Image src={ExploreServices1} alt='ExploreServices1' className='w-[100%] mx-auto'/>
                <h1 className='text-2xl my-2 font-medium'>Hair Salon Haven</h1>
                <p className='text-[#FB7902]'>Explore Now &rarr;</p>
            </div>

            <div className='my-5 md:my-0'>
                <Image src={ExploreServices2} alt='ExploreServices2' className='w-[100%] mx-auto'/>
                <h1 className='text-2xl my-2 font-medium'>Waxing Salon Haven</h1>
                <p className='text-[#FB7902]'>Explore Now &rarr;</p>
            </div>

            <div className='my-5 md:my-0'>
                <Image src={ExploreServices3} alt='ExploreServices3' className='w-[100%] mx-auto'/>
                <h1 className='text-2xl my-2 font-medium'>Skincare Salon Haven</h1>
                <p className='text-[#FB7902]'>Explore Now &rarr;</p>
            </div>
        </div>



        <div className='my-14 grid md:grid-cols-2 gap-5'>
            <div className='w-[100%] h-[100%]'>
                <Image src={ExploreServices4} alt='ExploreServices4' className='w-[100%] mx-auto'/>
                <h1 className='text-3xl my-5 font-medium'>The Place Of <span className='text-[#FB7902]'>Beauty</span></h1>
            </div>
            <div className='w-[100%] h-[100%]'>
                <Image src={ExploreServices6} alt='ExploreServices6' className='w-[100%] mx-auto'/>
                <h1 className='text-[#4A4A4A] my-5 w-[80%]'>Our heart goes out at what to we do and our slogan is making our customers  feel beautiful and fabulous.</h1>
            </div>
        </div>

        </div>



        {/* Explore Collections */}
        <div className='w-[100%]'>
            <div className='grid grid-cols-2 items-center justify-between w-[100%] my-5 relative'>
                <h1 className='md:text-3xl font-medium'>Featured</h1>
                <button className='bg-[#000] absolute right-0 text-white text-center flex justify-end py-2 px-6 rounded-sm mx-auto '>Explore Collection</button>
            </div>


            <div className='grid md:grid-cols-3 gap-5 my-10'>
                <div className='cursor-pointer'>
                    <Image src={ExploreCollection1} alt='ExploreCollection1' className='w-[100%] mx-auto my-5 md:my-2'/>
                </div>
                <div className='cursor-pointer'>
                    <Image src={ExploreCollection2} alt='ExploreCollection2' className='w-[100%] mx-auto my-5 md:my-2'/>
                </div>
                <div className='cursor-pointer'>
                    <Image src={ExploreCollection3} alt='ExploreCollection3' className='w-[100%] mx-auto my-5 md:my-2'/>
                </div>
            </div>

            <div className='cursor-pointer my-7 w-[100%] mx-auto'>
                    <Image src={ExploreCollection4} alt='ExploreCollection4' className='w-[100%] mx-auto'/>
                </div>

        </div>



        {/* Our Storys */}
        <div className='my-5'>
            <h1 className='text-3xl'>Our <span className='text-[#FB7902]'>Story</span></h1>
            <div className='my-5 grid md:grid-cols-2 items-center justify-between md:relative'>
                <p className='text-[#4A4A4A]'>Life inside our beauty salon is never a dull moment, and the <br /> enthusiasm of wanting to satisfy our customers keeps all of <br /> us united.</p>
                <button className='bg-[#000] ml-0 my-5 md:my-0 md:absolute md:right-0 text-white text-center flex justify-end py-2 px-6 rounded-sm mx-auto '>All Our Stories</button>
            </div>

           <div>
                <Testimonials/>
           </div> 
        </div>



    </div>
  )
}

export default Home
