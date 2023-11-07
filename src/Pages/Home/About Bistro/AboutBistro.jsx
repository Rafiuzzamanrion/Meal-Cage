import img from '../../../assets/contact/banner.jpg'
const AboutBistro = () => {
    return (
        <div className='grid md:grid-cols-2 my-10'>
           <div>
           <img className='md:rounded-s-xl' src={img} alt="" />
           </div>
            <div className='text-black bg-base-100 shadow-xl text-center p-6 md:rounded-r-xl'>
                <h3 className='text-3xl uppercase mb-4 text-success '>Meal Cage</h3>
            <p className=''>Meal Cage: A Culinary Masterpiece

                At Meal Cage, we are more than just a restaurant; we are a haven for culinary enthusiasts. Our chefs blend tradition with innovation, using the finest ingredients to create dishes that delight your senses. Join us for an unforgettable dining experience today. <br />
                At Meal Cage, we are more than just a restaurant; we are a haven for culinary enthusiasts. Our chefs blend tradition with innovation, using the finest ingredients to create dishes that delight your senses. Join us for an unforgettable dining experience today. <br />
                At Meal Cage, we are more than just a restaurant; we are a haven for culinary enthusiasts. Our chefs blend tradition with innovation, using the finest ingredients to create dishes that delight your senses. Join us for an unforgettable dining experience today.</p>

            </div>
            
        </div>
    );
};

export default AboutBistro;