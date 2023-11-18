import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import BookingCard from "./BookingCard";
import {Helmet} from "react-helmet-async";


const ManageBookings = () => {
    const {data: bookings = [],refetch} = useQuery({
        queryKey:['bookingsHistory'],
        queryFn: async ()=>{
            const res = await axios.get('https://meal-cage-server.vercel.app/bookingsHistory');
            return res.data;
        }
    });



    return (
        <div>
            <Helmet>
                <title>MealCage | Manage-booking</title>
            </Helmet>
            <h1 className="text-center uppercase text-4xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800">all bookings</h1>
            <div className="grid lg:grid-cols-2 gap-5">
                {
                    bookings.map(booking => <BookingCard key={booking._id} booking={booking} refetch = {refetch}></BookingCard>)
                }
            </div>
            
        </div>
    );
};

export default ManageBookings;