
const BookingCard = ({booking}) => {
    const {email,price,quantity,status,foodId} = booking;
    console.log(foodId)
    
    return (
        <div data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800">
            <div className="flex flex-col gap-3 ms-4 shadow-xl p-10 rounded-xl mt-5">
                <h1><span className="text-teal-500 font-bold">User : </span>{email}</h1>
                <h1><span className="text-teal-500 font-bold">Price : </span>${price}</h1>
                <h1><span className="text-teal-500 font-bold">Quantity : </span>{quantity}</h1>
                {/* <h1>FoodId : {foodId}</h1> */}
                <h1><span className="text-teal-500 font-bold">Status : </span>{status}</h1>
                <div className="flex justify-center items-center my-3">
                    <button className="btn btn-accent btn-outline border-b-8">Deliver</button>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;