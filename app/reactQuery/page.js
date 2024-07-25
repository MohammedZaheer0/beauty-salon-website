
// import React from 'react';
// import Image from 'next/image';
// import useProducts from '../components/Query'; // Import the custom hook

// const ReactQuery = () => {
//     const { data, isLoading, isError, error } = useProducts();

//     if (isLoading) {
//         return <h1>Loading...</h1>;
//     }

//     if (isError) {
//         return <h1>{error.message}</h1>;
//     }

//     return (
//         <div>
//             {data.map(product => (
//                 <div key={product.id}>
//                     <h1>{product.title}</h1>
//                     <Image src={product.image} alt={product.title} width={100} height={100} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ReactQuery;
