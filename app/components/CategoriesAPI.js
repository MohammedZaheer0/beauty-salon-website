'use client';
import React from 'react';
import Image from 'next/image';
import categoryData from './CategoriesData'; // Adjust path as needed

//  const categories =[ 
//     {
//     heading: "Everyday Makeup",
//     buttonLabel: "Explore All",
//     products: [
//         { image: '../../public/images/Rectangle_1.png', title: 'No-Makeup Makeup', price: '$30' },
//         { image: '../../public/images/Rectangle_2.png', title: 'Minimalist Makeup', price: '$40' },
//         { image: '../../public/images/Rectangle_3.png', title: 'Office Makeup', price: '$50' },
//     ]
//   },

//   {
//     heading: "Bridal Makeup",
//     buttonLabel: "Explore All",
//     products: [
//         { image: '../../public/images/Rectangle_4.png', title: 'Romantic Bridal', price: '$80' },
//         { image: '../../public/images/Rectangle_5.png', title: 'Glamorous Bridal', price: '$90' },
//         { image: '../../public/images/Rectangle_6.png', title: 'Vintage Bridal', price: '$80' },
//     ]
//   },

//   {
//     heading: "Special Occasion Makeup",
//     buttonLabel: "Explore All",
//     products: [
//         { image: '../../public/images/Rectangle_7.png', title: 'Party Makeup', price: '$60' },
//         { image: '../../public/images/Rectangle_8.png', title: 'Halloween Makeup', price: '$80' },
//         { image: '../../public/images/Rectangle_9.png', title: 'Anniversary Makeup', price: '$70' },
//     ]
//   },

//   {
//     heading: "Theatrical Makeup",
//     buttonLabel: "Explore All",
//     products: [
//         { image: '../../public/images/Rectangle_10.png', title: 'Clown Makeup', price: '$100' },
//         { image: '../../public/images/Rectangle_11.png', title: 'Old Age Makeup', price: '$160' },
//         { image: '../../public/images/Rectangle_12.png', title: 'Character Makeup', price: '$180' }
//     ]
//   },

// ];


const CategoriesAPI = () => {
    return (
      <div>
        {categoryData.map((category, index) => (
          <div key={index} className='w-[90%] mx-auto'>
            <div className='grid grid-cols-2 items-center justify-between w-[100%] my-10 relative'>
              <h1 className='md:text-3xl font-medium'>{category.heading}</h1>
              <button className='bg-[#000] absolute right-0 text-white text-center flex justify-end py-2 px-5 rounded-sm'>
                {category.buttonLabel}
              </button>
            </div>


            <div className='my-8 grid md:grid-cols-3 sm:gap-5'>
              {category.products.map((product, idx) => (
                <div key={idx} className='my-5 md:my-0 '>
                  <Image src={product.image} alt={product.title} width={250} height={250} className='w-[100%] mx-auto' />
                  <div className="flex justify-between items-center md:text-2xl my-3 font-medium">
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                  </div>
                  <p className='text-[#FB7902] font-medium'>Book Now &rarr;</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoriesAPI;
