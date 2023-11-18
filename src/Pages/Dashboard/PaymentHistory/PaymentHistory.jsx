import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../../../Providers/AuthProvider";
import HistoryCard from "./HistoryCard";
import {Helmet} from "react-helmet-async";



const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const {data: payment =[]} = useQuery({
        queryKey:['paymentHistory',user.email],
        queryFn: async () => {
                const res = await axios.get( `http://localhost:5000/paymentHistory?email=${user.email}`);
                return res.data;
        },   
    })

    console.log(payment)





    return (
        <div className="">
            <Helmet>
                <title>MealCage | Payment-history</title>
            </Helmet>
            <h1 className="text-center uppercase text-4xl mb-10"
             data-aos="fade-down"
             data-aos-easing="linear"
             data-aos-duration="800">payment history</h1>
            <div className="grid grid-cols-1 gap-4 w-full">
                {
                    payment.map(paymentData => <HistoryCard key={paymentData._id} paymentData={paymentData}></HistoryCard> )
                }
            </div>
        </div>
    );
};

export default PaymentHistory;