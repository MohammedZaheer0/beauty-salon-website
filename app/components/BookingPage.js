// 'use client';
// import React from 'react';

// const BookingPage = () => {
//   return (
//     <div>
//         <div className='bookingimage w-[90%] grid place-content-center mx-auto h-lvh my-20 p-10'>


//                 <div className='bookingimagecenter p-10 w-[100%]'>
//                     <h1 className='text-[#fff] my-5 text-center md:text-3xl text-[18px]'>Makeup Appointment Form</h1>
//                     <p className='text-[#fff] my-5 text-center md:text-[14px] text-[12px]'>Please fill the form below, it will only take 3 minutes</p>

//             <form action="" onClick={(e) => e.preventDefault()} className='w-[100%] bg-[red]'>
//               <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-10 md:gap-7 '>
//                 <input type="text" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none w-[100%]' placeholder='Your Name'/>

//                 <input type="email" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none' placeholder='Email'/>
//               </div>

//               <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-10 md:gap-7'>
//                 <input type="text" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none' placeholder='Phone'/>

//                 <select name="makeup" id="makeup" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none'>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                     <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
//                 </select>
//               </div>


//               <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-10 md:gap-7 '>
//                 <input type="date" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none' placeholder='Choose Your Date'/>

//                 <input type="time" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none' placeholder='Choose Your Time'/>
//               </div>

//               <textarea name="message" id="message" rows={4} className='py-2 px-4 rounded-sm text-[#fff] bg-transparent my-4 border-2 outline-none w-[100%]' placeholder='Message'></textarea>

//               <button type='submit' className='bg-[#fff] cursor-pointer text-[#1E1E1E] py-2 md:px-14 px-8 rounded-sm'>Send</button>

//             </form>
//                 </div>
//         </div>
//     </div>
//   )
// }

// export default BookingPage;






'use client';
import React from 'react';

const BookingPage = () => {
  return (
    <div>
        <div className='bookingimage w-[90%] md:w-full grid place-content-center mx-auto h-screen md:my-20 my-28 py-10 px-4'>
            <div className='bookingimagecenter p-10 w-full max-w-4xl mx-auto'> {/* Set width to full and add max-width */}
                <h1 className='text-[#fff] my-5 text-center md:text-3xl text-lg'>Makeup Appointment Form</h1>
                <p className='text-[#fff] my-5 text-center md:text-sm text-xs'>Please fill the form below, it will only take 3 minutes</p>

                <form action="" onClick={(e) => e.preventDefault()} className='w-full p-5'> {/* Set form width to full */}
                    <div className='grid md:grid-cols-2 gap-5 md:my-7 my-3'>
                        <input type="text" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full' placeholder='Your Name'/>
                        <input type="email" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full' placeholder='Email'/>
                    </div>

                    <div className='grid md:grid-cols-2 gap-5 md:my-7 my-3'>
                        <input type="text" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full' placeholder='Phone'/>
                        <select name="makeup" id="makeup" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full'>
                            <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                            <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                   <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                    <option value="Select Your Makeup Type" className='text-black'>Select Your Makeup Type</option>
                        </select>
                    </div>

                    <div className='grid md:grid-cols-2 gap-5 md:my-7 my-3'>
                        <input type="date" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full' placeholder='Choose Your Date'/>
                        <input type="time" className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full' placeholder='Choose Your Time'/>
                    </div>

                    <textarea name="message" id="message" rows={4} className='py-2 px-4 rounded-sm text-[#fff] bg-transparent border-2 border-[#fff] outline-none w-full' placeholder='Message'></textarea>

                    <button type='submit' className='bg-[#fff] cursor-pointer text-[#1E1E1E] py-2 px-8 rounded-sm mt-4'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default BookingPage;
