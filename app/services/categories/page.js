import React from 'react';
import Image from 'next/image';
import Category1 from '../../../public/images/categories1.png';
import Category2 from '../../../public/images/categories2.png';
// import CategoriesData from '@/app/components/CategoriesData';
import CategoriesAPI from '../../components/CategoriesAPI';

const Categories = () => {
  return (
    <div>   
            <div className='w-[90%] mx-auto my-10 justify-between items-center grid md:grid-cols-2 gap-10'>
                <div>
                <Image src={Category1} alt='Category1'  className='w-[100%]' priority/>
                <h1 className='text-[25px] font-medium my-10'>The Place Of <span className='text-[#FB7902]'>Beauty</span></h1>
                </div>

                <div>
                <Image src={Category2} alt='Category2'  className='w-[100%]' priority/>
                <p className='text-[#4A4A4A] my-10'>Explore our makeup types, choose the one you like and follow the link to book, <br /> we’ll be glad to have you.</p>
                </div>
            </div>

            <CategoriesAPI />
            
    </div>
  )
}

export default Categories
