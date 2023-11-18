import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {FaSackDollar, FaUser} from 'react-icons/fa6'
import {HiTemplate} from "react-icons/hi";
import {GiForkKnifeSpoon} from "react-icons/gi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

import { PieChart, Pie} from 'recharts';
import {Helmet} from "react-helmet-async";

const AdminHome = () => {
  const { user } = useContext(AuthContext);

  const { data: states = {} } = useQuery({
    queryKey: ["admin-states"],
    queryFn: async () => {
      const res = await axios.get("https://meal-cage-server.vercel.app/admin-states");
      return res.data;
    },
  });


  const { data:items =[] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axios.get("https://meal-cage-server.vercel.app/chart-data");
      return res.data;
    },
  });

  const newArray = [];


  const salad = items.filter(item => item.category === 'salad');
  const SaladData = {
    count: salad.length,
    category: 'salad', // Set the category directly, assuming it's a constant for salad items
    total: salad.reduce((sum, item) => item.price + sum, 0),
  };
  newArray.push(SaladData);

  const dessert = items.filter(item => item.category === 'dessert');
  const dessertData = {
    count: dessert.length,
    category: 'dessert', // Set the category directly, assuming it's a constant for salad items
    total: dessert.reduce((sum, item) => item.price + sum, 0),
  };
  newArray.push(dessertData)

  const soup = items.filter(item => item.category === 'soup');
  const total = soup.reduce((sum, item) => item.price + sum, 0)
  const newTotal = parseFloat(total?.toFixed(2))
  const soupData = {
    count: soup.length,
    category: 'soup', // Set the category directly, assuming it's a constant for salad items
   total:newTotal,
  };
  newArray.push(soupData)

  const pizza = items.filter(item => item.category === 'pizza');
  const pizzaData = {
    count: pizza.length,
    category: 'pizza', // Set the category directly, assuming it's a constant for salad items
    total: pizza.reduce((sum, item) => item.price + sum, 0),
  };
  newArray.push(pizzaData)
  const drinks = items.filter(item => item.category === 'drinks');
  const drinksData = {
    count: drinks.length,
    category: 'drinks', // Set the category directly, assuming it's a constant for salad items
    total: drinks.reduce((sum, item) => item.price + sum, 0),
  };
  newArray.push(drinksData)








  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
  
  return (
    <div>
      <Helmet>
        <title>MealCage | Admin-home</title>
      </Helmet>
      <h1 className="text-3xl my-6 ps-24">Hi, {user.displayName}</h1>
      <div className="grid md:grid-cols-2 gap-4 ps-24">
        <div className="w-72 h-40 bg-green-200 shadow-xl rounded-xl flex flex-col justify-center items-center"
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="800">
          <h1 className="text-center items-center">
            <FaSackDollar size={40}/>
            </h1>
            <h1 className="text-4xl font-bold text-center items-center">
              {" "}
              ${parseFloat(states?.revenue?.toFixed(2))}
            </h1>
            <h3 className="text-xl font-semibold text-center uppercase">
             amount sold
            </h3>
        </div>
        <div className="w-72 h-40 bg-red-200 shadow-xl rounded-xl flex flex-col justify-center items-center"
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="800">
          <h1 className="text-center items-center">
            <FaUser size={40}/>
            </h1>
            <h1 className="text-4xl font-bold text-center items-center">
              {" "}
              {states.users}
            </h1>
            <h3 className="text-xl font-semibold text-center uppercase">
              customers
            </h3>
        </div>
        <div className="w-72 h-40 bg-orange-200 shadow-xl rounded-xl flex flex-col justify-center items-center"
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="800">
          <h1 className="text-center items-center">
          <GiForkKnifeSpoon size={40} />
            </h1>
            <h1 className="text-4xl font-bold text-center items-center">
              {" "}
              {states.menuItems}
            </h1>
            <h3 className="text-xl font-semibold text-center uppercase">
              Menu Items
            </h3>
        </div>
        <div className="w-72 h-40 bg-blue-200 shadow-xl rounded-xl flex flex-col justify-center items-center"
        data-aos="flip-left"
        data-aos-easing="linear"
        data-aos-duration="800">
          <h1 className="text-center items-center">
            <HiTemplate size={40}/>
            </h1>
            <h1 className="text-4xl font-bold text-center items-center">
              {" "}
              {states.orders}
            </h1>
            <h3 className="text-xl font-semibold text-center uppercase">
            item sold
            </h3>
        </div>
      </div>

      {/* ================ bar chart ================ */}

   <div className=" mt-16">
   <div>
    <BarChart
      width={500}
      height={300}
      data={newArray}
      margin={{
       
        right: 30,
        top:30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {newArray.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>


    <div>
   
        <PieChart width={400} height={400}>
          <Pie
            data={newArray}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="count"
          >
            {newArray.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    
    </div>
   </div>
    </div>
  );
};

export default AdminHome;
