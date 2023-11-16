import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import BookingCard from "./BookingCard";
import {Helmet} from "react-helmet-async";


const ManageBookings = () => {
    const {data: bookings = [],refetch} = useQuery({
        queryKey:['bookingsHistory'],
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:5000/bookingsHistory');
            return res.data;
        }
    });



    return (
        <div>
            <Helmet>
                <title>MealCage | Manage-booking</title>
            </Helmet>
            <div className="grid lg:grid-cols-2 gap-5">
                {
                    bookings.map(booking => <BookingCard key={booking._id} booking={booking} refetch = {refetch}></BookingCard>)
                }
            </div>
            
        </div>
    );
};

export default ManageBookings;