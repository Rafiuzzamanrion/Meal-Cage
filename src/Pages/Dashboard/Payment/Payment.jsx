import {Helmet} from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import UseCart from "../../../Hooks/UseCart";


const Payment = () => {
    // todo: provide publishable key 
    const stripePromise = loadStripe(import.meta.env.VITE_payment_key)

    const [cart] = UseCart();

    // ===== easy way to addition ==========
    // ======= here 0 is initial value =========
    const total = cart.reduce((sum,item)=> item.price + sum,0 )
    const price = parseFloat(total?.toFixed(2))

    return (
        <div className="w-2/3">
            <Helmet>
                <title>MealsCage | Payment</title>
            </Helmet>
            <SectionTitle heading={'payment here'} subHeading={'have a nice day'}></SectionTitle>
            <h1 className="text-3xl text-center uppercase my-8">Total Amount To Pay : <span className="font-semibold">${price}</span></h1>
             
             <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price = {price}></CheckoutForm>
             </Elements>
        </div>
    );
};

export default Payment;