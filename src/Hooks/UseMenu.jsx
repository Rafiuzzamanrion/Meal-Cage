import { useQuery } from '@tanstack/react-query'
import axios from "axios";
 
 
 const UseMenu = () =>{


    const {refetch, data: menu =[],isLoading:loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axios.get(`https://meal-cage-server.vercel.app/menu`)

            return res.data;
      },
});
    return [menu,refetch,loading]

 };


 export default UseMenu;





