'use client';
import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Branch1 from '../../public/images/Branch1.jpg';
import Branch2 from '../../public/images/Branch2.png';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className='w-[90%] mx-auto '>
      
      <div className='grid lg:grid-cols-[40%_60%] md:grid-cols-2 grid-cols-1 justify-between items-start my-14 lg:gap-10 gap-5'>

          <div className='bg-[#CECCCC] p-4 rounded-sm'>
              <h1 className='text-2xl font-medium my-4'>Contact Information</h1>
              <p className='text-[#4A4A4A] my-7 text-[15px] md:text-left text-justify'>Feel free to reach out to us for appointments, inquiries, or to experience the tranquility of Serene Beauty. We are here to make your beauty journey as serene as possible.</p>

              <div className='flex items-center gap-5 my-7'>
                <p className='border-2 border-yellow-300	 p-2 rounded-full'><IoLocationOutline/></p>
                <p className='md:text-[16px] text-[13px]'>1901 Thornridge Cir. Shiloh, Hawaii 81063, USA</p>
              </div>

              <div className='flex items-center gap-5 my-7'>
                <p className='border-2 border-yellow-300	 p-2 rounded-full'><AiOutlineMessage/></p>
                <p className='md:text-[16px] text-[13px]'>@serenbeauty.com</p>
              </div>

              <div className='flex items-center gap-5 my-7'>
                <p className='border-2 border-yellow-300	 p-2 rounded-full'><IoCallOutline/></p>
                <p className='md:text-[16px] text-[13px]'>(629) 555-0129</p>
              </div>

              <div className='flex items-center gap-5 my-8'>
                <p className='border-2 border-yellow-300	 p-2 rounded-full cursor-pointer'><FaInstagram/></p>
                <p className='border-2 border-yellow-300	 p-2 rounded-full cursor-pointer'><FaYoutube/></p>
                <p className='border-2 border-yellow-300	 p-2 rounded-full cursor-pointer'><FaTwitter/></p>
                <p className='border-2 border-yellow-300	 p-2 rounded-full cursor-pointer'><FaPinterest/></p>
              </div>

          </div>


          <div>

            <h1 className='border-b-2 py-4 text-2xl font-medium'>Have a Question?</h1>
            <p className='text-[15px] mt-5 mb-3'><span className='text-[#FB7902] font-medium'>Business Hours: </span> <span><span className='font-medium'> Mon – Fri:</span><span className='text-[#605F5F]'> 08.00 AM to 09.00 PM </span></span> <span ><span className='font-medium'> Sat: </span> <span className='text-[#605F5F]'> 09.00 AM To 06.00 PM</span></span></p>

            <form action="" onClick={(e) => e.preventDefault()}>
              <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-10 md:gap-7 '>
                <input type="text" className='py-2 px-4 rounded-sm text-[#605F5F] my-4 border-2 outline-none' placeholder='Your Name'/>

                <input type="email" className='py-2 px-4 rounded-sm text-[#605F5F] my-4 border-2 outline-none' placeholder='Email'/>
              </div>

              <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-10 md:gap-7'>
                <input type="text" className='py-2 px-4 rounded-sm text-[#605F5F] my-4 border-2 outline-none' placeholder='What Service You Want?'/>

                <input type="text" className='py-2 px-4 rounded-sm text-[#605F5F] my-4 border-2 outline-none' placeholder='Phone'/>
              </div>
              <textarea name="message" id="message" rows={4} className='py-2 px-4 rounded-sm text-[#605F5F] my-4 border-2 outline-none w-[100%]' placeholder='Message'></textarea>

              <button type='submit' className='bg-[#1E1E1E] cursor-pointer text-white py-2 md:px-14 px-8 rounded-sm'>Send</button>

            </form>

          </div>
      </div>


      <div className='py-5'>
      <h1 className='font-medium md:text-3xl text-2xl text-center my-10'>Come And Visit <span className='text-[#FB7902]'>Our Other Branches</span></h1>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-between'>

            <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-between border-2'>

              <div className='p-4'>
                <h2 className='font-medium text-2xl my-4'>Lekki, Nigeria</h2>
                <p className='text-[14px] text-[#4A4A4A]'>6391 Elgin St. Celina, Delaware 10299</p>
                <div className='text-[#4A4A4A] flex items-center gap-3 my-7'>
                  <AiOutlineMessage className='text-[#FB7902]'/>
                  <p>@serenbeauty.com.ng</p>
                </div>
                <div className='text-[#4A4A4A] flex items-center gap-3 my-7'>
                  <IoCallOutline className='text-[#FB7902]'/>
                  <p>(207) 555-0119</p>
                </div>
              </div>

            <Image src={Branch1} alt='Branch1' className='w-[100%]' priority/>
            </div>


            
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center justify-between border-2'>

              <div className='p-4'>
                <h2 className='font-medium text-2xl my-4'>Kumasi, Ghana</h2>
                <p className='text-[14px] text-[#4A4A4A]'>Riverside 25, San Francisco California</p>
                <div className='text-[#4A4A4A] flex items-center gap-3 my-7'>
                  <AiOutlineMessage className='text-[#FB7902]'/>
                  <p>@serenbeauty.com.gh</p>
                </div>
                <div className='text-[#4A4A4A] flex items-center gap-3 my-7'>
                  <IoCallOutline className='text-[#FB7902]'/>
                  <p>(303) 555-0105</p>
                </div>
              </div>

            <Image src={Branch2} alt='Branch1' className='w-[100%]' priority/>
            </div>
      </div>

      </div>

    </div>
  )
}

export default ContactUs
