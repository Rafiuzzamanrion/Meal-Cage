import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
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
                    price: parseFloat(price),
                    category,
                    recipe,
                    image: imgURL,
                  };
// ============== hosting end ======================
// ============== post the menu to database =============== 
              axiosSecure.post('/menu',newItem)
                .then((data) => {
                  if(data.data.insertedId) {
                   reset()
                    Swal.fire(
                      "Updated!",
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

  return (
    <div className="md:w-full my-6 md:ps-6">
      <Helmet>
        <title> Meal | Add item</title>
      </Helmet>
      <SectionTitle
        subHeading={"what's new"}
        heading={"add new item"}
      ></SectionTitle>
      <div className="bg-base-100 shadow-xl px-24 py-8 mb-10 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Recipe Name</span>
            </label>
            <input
              {...register("name", { required: true, maxLength: 120 })}
              type="text"
              placeholder="recipe name "
              className="input input-success input-bordered w-full max-w-xs"
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
              className="input input-success input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              {...register("category", { required: true, maxLength: 120 })}
              defaultValue={"Pick One"}
              className="select select-success select-bordered"
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("recipe", { required: true, maxLength: 120 })}
              className="textarea textarea-success textarea-bordered h-24"
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
              className="file-input file-input-success file-input-bordered w-full max-w-xs"
            />
          </div>
          <input
            className="btn btn-success bg-transparent border-b-8 btn-outline my-6"
            type="submit"
            value="Add item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
