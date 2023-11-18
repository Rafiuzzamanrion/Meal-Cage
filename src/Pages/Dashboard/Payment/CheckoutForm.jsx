import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import Swal from "sweetalert2";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";


const CheckoutForm = ({ price,cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
 
  
  const [clientSecret, setClientSecret] = useState();

  useEffect(() => {
    axios.post("https://meal-cage-server.vercel.app/create-payment-intent", {
       price
    })
   
    .then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    })
    .catch((error) => {
        console.error("Axios Error:", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    console.log(card);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      Swal.fire({
        position: "top",
        icon: "error",
        title: `${error.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log("payment method", paymentMethod);
    }

    const {paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if(confirmError){
        console.log(confirmError)
        Swal.fire({
            position: "top",
            icon: "error",
            title: `${confirmError.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
    } 
    if(paymentIntent.status === 'succeeded'){
     
        Swal.fire({
            position: "top",
            icon: "success",
            title: `Your payment has been received`,
            showConfirmButton: false,
            timer: 1500,
          });

          const payment = {email:user?.email,transactionId:paymentIntent.id,
            price,
            date:Date(),
            status:'service pending',
            quantity:cart.length,
            itemsName:cart.map(item => item.name),
            cartItems:cart.map(item => item._id),
            foodId:cart.map(item => item.foodId),
        }
            
        axios.post('https://meal-cage-server.vercel.app/payments',payment)
        .then(res=>{
            if(res.data.insertResult.insertedId){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `payment ifo saved successfully`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })
       
        
    }
    








  };
  
  return (
    <div className="bg-base-100 w-full p-12 rounded-xl shadow-xl">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "25px",
                color: "#332D2D",
                "::placeholder": {
                  color: "#332D2D",
                },
              },
              invalid: {
                color: "#DC4C64",
              },
            },
          }}
        />
        <div className=" flex">
          <button
            className="btn btn-success btn-outline border-b-8 mt-6 items-center"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
