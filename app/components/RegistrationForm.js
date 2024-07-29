// 'use client';
// import React from 'react';
// import RegisterLoginComponent from './RegisterLoginComponent';

// const RegistrationForm = () => {
//   return (
//     <div>
//        <RegisterLoginComponent 
//        bgImage='registrationImage'
//        name='Register' 
//        text='Welcome to Serene Beauty Salon, we hope your stay with us feel as bright as the morning sun.'
//        button='Register'
//        footer='Already have an account?'
//        page='Login'
//        />
//     </div>
//   )
// }

// export default RegistrationForm


'use client';
import React from 'react';
import RegisterLoginComponent from './RegisterLoginComponent';

const RegistrationForm = () => {
  return (
    <div>
      <RegisterLoginComponent 
        bgImage='registrationImage'
        name='Register'
        text='Welcome to Serene Beauty Salon, we hope your stay with us feels as bright as the morning sun.'
        button='Register'
        footer='Already have an account?'
        page='Login'
      />
    </div>
  );
}

export default RegistrationForm;

