
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../public/images/Vector.png';
import { CiSearch } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);

  const toggleMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className='w-[100%] bg-white'>
        <div className='w-[90%] mx-auto left-0 right-0 grid grid-cols-[30%_70%] justify-between items-center py-5'>
          <div className='flex letterspacing items-center text-[15px] md:text-[16px] cursor-pointer'>
            <span onClick={() => router.push('/')}>SERENE </span>
            <Image src={Logo} alt='Logo' onClick={() => router.push('/')} />
            <span className='text-[#FB7902] mx-1' onClick={() => router.push('/')}> BEAUTY</span>
          </div>

          <div className='grid md:grid-cols-[60%_40%] grid-cols-1 items-center justify-between bg-[#00] md:bg-none text-white md:text-[#000]'>
            <ul className='grid-cols-4 justify-between items-center hidden lg:grid'>
              <li className={pathname === '/' ? 'active' : ''}>
                <Link href='/' className='cursor-pointer text-[15px]'>
                  Home
                </Link>
              </li>

              <li className={pathname === '/services' ? 'active' : ''}>
                <Link href='/services' className='cursor-pointer text-[15px]'>
                  Services
                </Link>
              </li>

              <li className={pathname === '/aboutus' ? 'active' : ''}>
                <Link href='/aboutus' className='cursor-pointer text-[15px]'>
                  About Us
                </Link>
              </li>

              <li className={pathname === '/contactus' ? 'active' : ''}>
                <Link href='/contactus' className='cursor-pointer text-[15px]'>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className='justify-end gap-7 items-center hidden lg:flex'>
              <span className='cursor-pointer text-[20px]'><CiSearch /></span>
              <span className='cursor-pointer text-[20px]'><IoBagRemoveOutline /></span>
              <button className='bg-[#1E1E1E] py-2 px-8 text-[#fff] cursor-pointer rounded-sm' onClick={() => router.push('/login')}>Login</button>
            </div>
          </div>


          <div className='lg:hidden flex items-center absolute top-2 right-0'>
            <button className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-[25px] md:text-[30px]' onClick={toggleMenu}>
              {isClick ? <FaXmark /> : <IoMenu />}
            </button>
          </div>
        </div>

        {isClick && (
          <div className='lg:hidden flex-col items-center absolute top-[100px] w-full bg-white py-10 pb-52 z-10'>
            <ul className='flex flex-col justify-center items-center gap-8'>
              <li className={pathname === '/' ? 'active' : ''}>
                <Link href='/' className='cursor-pointer text-[15px]'>
                  Home
                </Link>
              </li>

              <li className={pathname === '/services' ? 'active' : ''}>
                <Link href='/services' className='cursor-pointer text-[15px]'>
                  Services
                </Link>
              </li>

              <li className={pathname === '/aboutus' ? 'active' : ''}>
                <Link href='/aboutus' className='cursor-pointer text-[15px]'>
                  About Us
                </Link>
              </li>

              <li className={pathname === '/contactus' ? 'active' : ''}>
                <Link href='/contactus' className='cursor-pointer text-[15px]'>
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className='justify-center gap-7 items-center flex lg:hidden mt-8'>
              <span className='cursor-pointer text-[20px] hidden md:flex'><CiSearch /></span>
              <span className='cursor-pointer text-[20px] hidden md:flex'><IoBagRemoveOutline /></span>
              <button className='bg-[#1E1E1E] py-2 px-8 text-[#fff] cursor-pointer rounded-sm' onClick={() => router.push('/login')}>Login</button>
            </div>

          </div>
        )}
      </div>
      <hr />
    </>
  );
};

export default Navbar;
