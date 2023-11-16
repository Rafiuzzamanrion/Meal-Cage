import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_ImageUploadToken;
  
const AddItem = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
 const [axiosSecure] = UseAxiosSecure()
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
   

// ==== add the photo to imagebb for hosting and get a image url ====
          Swal.fire({
            title: "Do you want to add this item to menu ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#14A44D",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add to menu !",
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(img_hosting_url, {
                method: "POST",
                body: formData,
              })
              .then((res) => res.json())
              .then((imgResponse) => {  
                if (imgResponse.success) {
                  const imgURL = imgResponse.data.display_url;
                  const { name, price, category, recipe } = data;
                  const newItem = {
                    name,
      //===== here product id is set for finding all sold price and category so i set a random id generator for unique id ========
                    productId: Math.random().toString(16).slice(2, 16),
                    price: parseFloat(price),
                    category,
                    recipe,
                    image: imgURL,
                  };
                  console.log(newItem)
                  // Math.random().toString(16).slice(2, 16)
// ============== hosting end ======================
// ============== post the menu to database =============== 
              axiosSecure.post('/menu',newItem)
                .then((data) => {
                  if(data.data.insertedId) {
                   reset()
                    Swal.fire(
                      "Added !!",
                    `${name} has been added to menu successfully`,
                      "success"
                    );
                  }
                });
            }
          });




        }

      });
  };
  // ===== this is for updating all item in menu just one click====
  // const handleUpdate = ()=>{
  //   axios.post('http://localhost:5000/updateProducts')
  //   .then((data)=>{
  //     console.log(data.data)
  //   })
  // }

  return (
    <div className="md:w-full my-6 md:ps-6">
      <Helmet>
        <title> MealCage | Add item</title>
      </Helmet>
      <h1 className="text-4xl text-center uppercase">Add a new item</h1>
      <div className="shadow-xl px-24 py-16 mb-5 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
         <div className="grid grid-cols-3 gap-4">
         <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 120 })}
              type="text"
              placeholder="recipe name "
              className="input input-accent input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              {...register("price", { required: true, maxLength: 120 })}
              type="number"
              placeholder="price "
              className="input input-accent input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              {...register("category", { required: true, maxLength: 120 })}
              defaultValue={"Pick One"}
              className="select select-accent select-bordered"
            >
              <option disabled>Pick One</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>drinks</option>
              <option>dessert</option>
              <option>desi</option>
            </select>
          </div>
         </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("recipe", { required: true, maxLength: 120 })}
              className="textarea textarea-accent textarea-bordered h-24"
              placeholder="about item"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Item image</span>
            </label>
            <input
              {...register("image", { required: true, maxLength: 120 })}
              type="file"
              className="file-input file-input-accent  file-input-bordered w-full max-w-xs"
            />
          </div>
         <div className="flex justify-center items-center">
         <input
            className="btn text-teal-500 border-2 border-teal-500 hover:bg-teal-500 hover:border-none hover:text-black bg-transparent border-b-8 btn-outline my-6"
            type="submit"
            value="Add item"
          />
         </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
