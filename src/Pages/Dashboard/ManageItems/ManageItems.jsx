import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import ManageCard from "./ManageCard";

const ManageItems = () => {
  const [menu] = UseMenu();

  return (
    <div
      className=""
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
      <Helmet>
        <title>MealCage | Manage items</title>
      </Helmet>
      <SectionTitle
        heading={"Manage all items"}
        subHeading={"hurry up"}
      ></SectionTitle>

      <div className="grid grid-cols-1  gap-6 mx-5">
        <h1 className="uppercase text-3xl"> total items : {menu.length}</h1>
        {menu.map((item) => (
          <ManageCard key={item._id} item={item}></ManageCard>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
