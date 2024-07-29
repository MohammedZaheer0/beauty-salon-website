// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation';

// const RegisterLoginComponent = ({bgImage,name,text,button,footer,page,remberme}) => {

//     const router = useRouter();
//     const PathName = usePathname();
//     console.log(PathName);
//   return (
//     <div>
//     <div className='w-[90%] mx-auto my-14 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 h-[100%]'>

//         <div className={`${bgImage} flex flex-col py-20 px-14`}>
//             <h2 className='text-[#FFFFFF] md:text-3xl text-2xl my-4 w-[100%] md:w-[70%]  registrationwordspacing'>We show your skin, hair, and body the care and attention they deserve.</h2>
//             <p className='text-[#FFFFFF] font-medium text-[13px]'>Where Tranquility Meets Transformation.</p>
//         </div>


//         <div className='bg-[#1E1E1E] text-[#FFFFFF] flex flex-col justify-center items-center py-10 lg:py-0'>
//         <div className='w-[70%]'>

//                 <h1 className='text-3xl my-4'>{name}</h1>
//                 <p className='text-[13px] my-3'>{text}</p>

//         <form action="" onClick={(e) => e.preventDefault()} className='flex flex-col'>
//             {PathName==='login' ? '' : <input type="text" className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent' placeholder='Your Name'/>}

//             <input type="email" className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent' placeholder='Email'/>

//             {PathName==='login'? <div><input type="checkbox" />{remberme}</div> : ''}

//             <input type="password" className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent' placeholder='Password'/>


//           <button type='submit' className='bg-[#fff] cursor-pointer text-[#000] py-2 my-3 md:px-14 px-8 rounded-sm'>{button}</button>

//           <p className='text-center text-[13px]'>{footer} <button className='text-[#FB7902] my-3 underline' onClick={() => {PathName==='login' ? router.push('/registrationform') : router.push('/login')}}>{page}</button></p>

//         </form>

//         </div>

//         </div>
//     </div>
// </div>
//   )
// }

// export default RegisterLoginComponent





'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const RegisterLoginComponent = ({ 
  bgImage, 
  name, 
  text, 
  button, 
  footer, 
  page, 
  rememberMe 
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleRedirect = () => {
    if (pathName === '/login') {
      router.push('/registrationform');
    } else {
      router.push('/login');
    }
  };

  return (
    <div>
      <div className='w-[90%] mx-auto my-14 grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 h-[100%]'>
        <div className={`${bgImage} flex flex-col py-20 md:px-14 px-4`}>
          <h2 className='text-[#000] font-medium md:text-3xl text-2xl my-4 w-[90%] md:w-[70%] registrationwordspacing'>
            We show your skin, hair, and body the care and attention they deserve.
          </h2>
          <p className='text-[#000] font-medium text-[13px]'>Where Tranquility Meets Transformation.</p>
        </div>

        <div className='bg-[#1E1E1E] text-[#FFFFFF] flex flex-col justify-center items-center py-10 lg:py-0'>
          <div className='w-[70%]'>
            <h1 className='text-3xl my-4'>{name}</h1>
            <p className='text-[13px] my-3'>{text}</p>

            <form action="" onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
              {pathName !== '/login' && (
                <input
                  type="text"
                  className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent'
                  placeholder='Your Name'
                />
              )}

              <input
                type="email"
                className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent'
                placeholder='Email'
              />

              {pathName === '/login' && (
                <div className='flex items-center my-3'>
                  <input type="checkbox" id="rememberMe" className='mr-2' />
                  <label htmlFor="rememberMe">{rememberMe}</label>
                </div>
              )}

              <input
                type="password"
                className='py-2 px-4 rounded-sm text-[#fff] my-3 border-2 outline-none bg-transparent'
                placeholder='Password'
              />

              <button
                type='submit'
                className='bg-[#fff] cursor-pointer text-[#000] py-2 my-3 md:px-14 px-8 rounded-sm'
              >
                {button}
              </button>

              <p className='text-center text-[13px]'>
                {footer}{' '}
                <button
                  type='button'
                  className='text-[#FB7902] my-3 underline'
                  onClick={handleRedirect}
                >
                  {page}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLoginComponent;
