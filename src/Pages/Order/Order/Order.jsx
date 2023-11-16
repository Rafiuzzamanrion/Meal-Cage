import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { useState } from "react";
import UseMenu from "../../../Hooks/UseMenu";

import OrderTab from "../OrderTab/OrderTab";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";

const Order = () => {
    const categories = ['salad','pizza','soups','dessert','drinks','offered'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();
 
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
   
  return (
    <div>
         <Helmet>
        <title>MealCage | Order Food</title>
            </Helmet>
      <Cover img={orderImg} title={"ORDER FOOD"}></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          
        </TabList>
        <TabPanel>
           <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
