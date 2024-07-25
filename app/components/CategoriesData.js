// import React from 'react';
// import Image from 'next/image';
// import Category1 from '../../../public/images/categories1.png';
// import Category2 from '../../../public/images/categories2.png';
// import CategoriesAPI from '@/app/components/CategoriesAPI';

// const Categories = () => {
//   return (
//     <div>
//       <div className='w-[90%] mx-auto my-10 grid md:grid-cols-2 gap-10'>
//         <div>
//           <Image src={Category1} alt='Category1' className='w-[100%]' priority />
//           <h1 className='text-[25px] font-medium my-10'>
//             The Place Of <span className='text-[#FB7902]'>Beauty</span>
//           </h1>
//         </div>
//         <div>
//           <Image src={Category2} alt='Category2' className='w-[100%]' priority />
//           <p className='text-[#4A4A4A] my-10'>
//             Explore our makeup types, choose the one you like and follow the link to book,
//             <br /> we’ll be glad to have you.
//           </p>
//         </div>
//       </div>
//       <CategoriesAPI />
//     </div>
//   );
// };

// export default Categories;




const categories = [
    {
      heading: "Everyday Makeup",
      buttonLabel: "Explore All",
      products: [
        { image: '/images/Rectangle_1.png', title: 'No-Makeup Makeup', price: '$30' },
        { image: '/images/Rectangle_2.png', title: 'Minimalist Makeup', price: '$40' },
        { image: '/images/Rectangle_3.png', title: 'Office Makeup', price: '$50' },
      ]
    },
    {
      heading: "Bridal Makeup",
      buttonLabel: "Explore All",
      products: [
        { image: '/images/Rectangle_4.png', title: 'Romantic Bridal', price: '$80' },
        { image: '/images/Rectangle_5.png', title: 'Glamorous Bridal', price: '$90' },
        { image: '/images/Rectangle_6.png', title: 'Vintage Bridal', price: '$80' },
      ]
    },
    {
      heading: "Special Occasion Makeup",
      buttonLabel: "Explore All",
      products: [
        { image: '/images/Rectangle_7.png', title: 'Party Makeup', price: '$60' },
        { image: '/images/Rectangle_8.png', title: 'Halloween Makeup', price: '$80' },
        { image: '/images/Rectangle_9.png', title: 'Anniversary Makeup', price: '$70' },
      ]
    },
    {
      heading: "Theatrical Makeup",
      buttonLabel: "Explore All",
      products: [
        { image: '/images/Rectangle_10.png', title: 'Clown Makeup', price: '$100' },
        { image: '/images/Rectangle_11.png', title: 'Old Age Makeup', price: '$160' },
        { image: '/images/Rectangle_12.png', title: 'Character Makeup', price: '$180' }
      ]
    },
  ];
  
  export default categories;
  