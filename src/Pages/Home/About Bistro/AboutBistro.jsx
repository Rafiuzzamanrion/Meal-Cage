import img from "../../../assets/contact/banner.jpg";
const AboutBistro = () => {
  return (
    <div className="grid md:grid-cols-2 my-10">
      <div
        data-aos="fade-down-right"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <img className="md:rounded-s-xl" src={img} alt="" />
      </div>
      <div
        className="text-black bg-base-100 shadow-xl text-center p-6 md:rounded-r-xl"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <h3 className="text-3xl uppercase mb-4 text-teal-500 ">Meal Cage</h3>
        <p className="">
          Meal Cage: A Culinary Masterpiece At Meal Cage, we are more than just
          a restaurant; we are a haven for culinary enthusiasts. Our chefs blend
          tradition with innovation, using the finest ingredients to create
          dishes that delight your senses. Join us for an unforgettable dining
          experience today. <br />
          At Meal Cage, we are more than just a restaurant; we are a haven for
          culinary enthusiasts. Our chefs blend tradition with innovation, using
          the finest ingredients to create dishes that delight your senses. Join
          us for an unforgettable dining experience today. <br />
          At Meal Cage, we are more than just a restaurant; we are a haven for
          culinary enthusiasts. Our chefs blend tradition with innovation, using
          the finest ingredients to create dishes that delight your senses. Join
          us for an unforgettable dining experience today.
        </p>
      </div>
    </div>
  );
};

export default AboutBistro;
