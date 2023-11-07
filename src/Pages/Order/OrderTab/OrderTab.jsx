import FoodCard from "../../../Components/Card/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6  p-8 rounded-xl">
           {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
           </div>
        </div>
    );
};

export default OrderTab;