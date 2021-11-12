import React from "react";
import { useForm } from "react-hook-form";
// import useAuth from './../../hooks/useAuth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AddProducts = () => {
  //   const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const MySwal = withReactContent(Swal);

  const onSubmit = (data) => {
    fetch("https://fast-earth-44959.herokuapp.com/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product Added Successfully',
        showConfirmButton: false,
        timer: 1500
      }));
  };
  return (
    <div>
      <div>
        <h3 className="pt-3 mt-5 text-center "><b>Add a</b> <span className="text-primary"><b>Product</b></span></h3>
        <div className="w-50 m-auto mt-5">
          <div className=" ">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Add"
                  className="btn btn-primary rounded-pill p-2 m-2 mt-4 w-100"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;