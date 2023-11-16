import { useQuery } from '@tanstack/react-query'
import axios from "axios";
 
 
 const UseMenu = () =>{


    const {refetch, data: menu =[],isLoading:loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/menu`)

            return res.data;
      },
});
    return [menu,refetch,loading]

 };


 export default UseMenu;





