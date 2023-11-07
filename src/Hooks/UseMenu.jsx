import {useEffect, useState} from "react";
 
 
 const UseMenu = () =>{


    const [menu,setMenu] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
            setLoading(false)
        
        })  
    },[])

    return [menu,loading]
 };


 export default UseMenu;



// ============ we used UseMenu instead of below's type hook ======

//  import { useQuery } from '@tanstack/react-query'
// import {useContext} from 'react';
// import {AuthContext} from '../Providers/AuthProvider';
// const UseCart = () => {
//     const {user} = useContext(AuthContext);
    
//     // ======= here data is destructured to a cart =[] array ======== if we want,we can use data directly by using map function
//     const {refetch, data: cart =[] } = useQuery({
//         queryKey: ['carts',user?.email],
//         queryFn: async () => {
//             const res = await fetch (`http://localhost:5000/carts?email=${user.email}`)

//             return res.json();
//       },
// });
//     return [cart,refetch]
// };
// export default UseCart;

