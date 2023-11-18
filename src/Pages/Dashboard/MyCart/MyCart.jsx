import {Helmet} from "react-helmet-async";
import UseCart from "../../../Hooks/UseCart";
import {BiDollarCircle,BiRightArrowAlt} from 'react-icons/bi'
import MyCartItem from "./MyCartItem";
import {Link} from "react-router-dom";


const MyCart = () => {
    const [cart] = UseCart();

    // ===== easy way to addition ==========
    // ======= here 0 is initial value =========
    const total = cart.reduce((sum,item)=> item.price + sum,0 )
    return (
        <div>
            <Helmet>
        <title>MealCage | My cart</title>
            </Helmet>
           
            <div className="uppercase my-12 str text-center bg-green-100 shadow-xl p-8 rounded-xl"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800">
                <h3 className="text-3xl my-3">Total Order : {cart.length} </h3>
                <h3 className="text-3xl my-3">Total Price : <span className="font-bold"> ${total.toFixed(2)}</span> </h3>
               <Link to="/dashboard/payment"> <button className="btn btn-outline btn-success border-b-8"><BiDollarCircle size={25}/>pay now<BiRightArrowAlt size={25}/></button></Link>
            </div>
            
            <div className="grid grid-cols-1  gap-6 mx-5">
                {
                    cart.map(item => <MyCartItem key={item._id} item={item}></MyCartItem> )
                }
            </div>
        
    
        </div>
    );
};

export default MyCart;