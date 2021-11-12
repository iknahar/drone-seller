import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



const Details = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { productId } = useParams();

  const MySwal = withReactContent(Swal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.displayName = user?.displayName;
    data.status = "Pending";
    data.name = product?.name;
    data.image = product?.image;
    data.price = product?.price;
    fetch("https://fast-earth-44959.herokuapp.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Order Added Successfully',
        showConfirmButton: false,
        timer: 1500
      }));

  };

  useEffect(() => {
    fetch(`https://fast-earth-44959.herokuapp.com/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="p-2">
      <h1 className="text-primary text center d-inline ms-5 "><b>{product?.name}</b></h1>
      <span className="mt-5"> <b>-Price: $🪙{product?.price}</b></span>
      <div className="row container d-flex align-items-center">
        <div className="col-md-6 ">
          <br />
          <img className="w-100" src={product.image} alt="" />
        </div>
        <div className="col-md-6">
          <h2 className="">Billing Info: Odering as:  </h2>
          <h3 className="text-primary"><b>{user?.displayName}</b> </h3>
          <p className="w-100">Billing Email: {user?.email}</p>
          <p className="w-100">{product?.description}</p>
          <div className="formdiv">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("address")}
                placeholder="Enter Your Address"
                className="w-100 input-field"
              />
              <input
                {...register("contact")}
                placeholder="Enter Your Phone Number"
                className="w-100 my-2 input-field"
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="💳 Purchase"
                className="btn btn-primary mt-2 py-3 rounded-0 w-100"
              />
            </form>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Details;