
// import { useQuery } from '@tanstack/react-query';

// // Function to fetch products from API
// const fetchProducts = async () => {
//     const response = await fetch('https://fakestoreapi.com/products');
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// };

// // Custom hook to use products data
// const useProducts = () => {
//     const { data, isLoading, isError, error } = useQuery({
//         queryKey: ['products'],
//         queryFn: fetchProducts,
//     });

//     return {
//         data,
//         isLoading,
//         isError,
//         error,
//     };
// };

// export default useProducts;
