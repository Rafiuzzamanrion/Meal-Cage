import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useContext} from "react";
import {AuthContext} from "../../../Providers/AuthProvider";
import HistoryCard from "./HistoryCard";



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
            <div className="grid grid-cols-1 gap-4 w-full">
                {
                    payment.map(paymentData => <HistoryCard key={paymentData._id} paymentData={paymentData}></HistoryCard> )
                }
            </div>
        </div>
    );
};

export default PaymentHistory;