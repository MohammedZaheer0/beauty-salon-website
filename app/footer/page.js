'use client';
import React,{useState} from 'react';
import Image from 'next/image';
import Logo from '../../public/images/Vector.png';
import { useRouter } from 'next/navigation';


const Footer = () => {
    const router = useRouter();

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');

  return (
    <div className='w-100% border-t-2 mt-14 '>
        <div className='w-[90%] mx-auto grid md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] justify-between grid-cols-1 pb-7 pt-6 '>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
                    <div>
                        <h2 className='text-[#FB7902] my-4 text-[20px] font-medium'>Brand</h2>
                        <p className='my-3'>Our Story</p>
                        <p className='my-3'>Careers</p>
                        <p className='my-3'>Privacy Policy</p>
                    </div>
                    <div>
                        <h2 className='text-[#FB7902] my-4 text-[20px] font-medium'>Support</h2>
                        <p className='my-3'>Booking</p>
                        <p className='my-3'>Exchange & Returns</p>
                        <p className='my-3'>Terms of Service</p>
                    </div>
                    <div>
                        <h2 className='text-[#FB7902] my-4 text-[20px] font-medium'>Connect</h2>
                        <p className='my-3'>Twitter</p>
                        <p>Instagram</p>
                        <p className='my-3'>Youtube</p>
                        <p className='my-3'>Pinterest</p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='my-4 text-[20px]'>Get to know more about us and everything we do.</h1>
                    <form action="" className='my-5' onClick={() =>{setName('') || setEmail('')}} onSubmit={(e) => {e.preventDefault()}}>
                        <input type="text" placeholder='Your Name' className='w-[100%] border-2 mb-4 rounded-sm outline-none p-2' onChange={(e) => setName(e.target.value)} required value={name}/>

                        <input type="email" placeholder='Your Email Address' className='w-[100%] border-2 mb-4 rounded-sm outline-none p-2' onChange={(e) => setEmail(e.target.value)} required value={email}/>

                        <button type='submit' className='text-white bg-black w-[100%] py-2 rounded-sm mb-5'>Subscribe</button>
                    </form>
                    <p className='mb-3 font-medium text-[18px]'>reach@serenebeauty.com</p>
                    <p className='mb-3 font-medium'>(629) 555-0129</p>
                </div>
        </div>


        <footer className='w-100% mx-auto border-t-2 py-8 mt-4'>
            <div className='w-[90%] mx-auto grid md:grid-cols-3 md:justify-between text-center gap-5  items-center'>


            <div className='flex letterspacing items-center mx-auto md:mx-0 text-[15px] md:text-[16px] cursor-pointer'>
            <span onClick={() => router.push('/')}>SERENE </span>
            <Image src={Logo} alt='Logo' onClick={() => router.push('/')} />
            <span className='text-[#FB7902] mx-1' onClick={() => router.push('/')}> BEAUTY</span>
          </div>

            <p>All rights reserved</p>

            <h2 className='font-medium'>Where <span className='text-[#FB7902]'>Tranquility</span> Meets <span className='text-[#FB7902]'><br /> Transformation</span>.</h2>

            </div>
        </footer>
    </div>
  )
}

export default Footer
