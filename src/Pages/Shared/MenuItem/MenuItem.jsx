const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div
      className="card card-side bg-base-100 shadow-xl"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
      <figure>
        <img
          style={{ borderRadius: "0 200px 200px 200px", padding: "15px" }}
          className="md:w-[120px] h-[120px] lg:ms-5 mr-5 md:pr-6 md:ps-6 md:ms-4"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-teal-500 font-semibold">{name}</h2>
        <p>{recipe.length < 80 ? <>{recipe}</> : <>{recipe.slice(0, 80)}</>}</p>
        <p className="text-teal-500">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
