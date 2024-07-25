import React from 'react'
import Home from './components/Home';
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// import ReactQuery from './reactQuery/page';

const page = () => {

  // const queryClient = new QueryClient();

  return (
    // <QueryClientProvider client={queryClient}>
    <div>
      <Home/> 
    </div>
      
      // <ReactQuery/>
    // </QueryClientProvider>
  )
}

export default page



// import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import ReactQuery from './reactQuery/page'; // Import the component

// const queryClient = new QueryClient();

// const MainPage = () => {
//     return (
//         <QueryClientProvider client={queryClient}>
//             <ReactQuery />
//         </QueryClientProvider>
//     );
// };

// export default MainPage;



