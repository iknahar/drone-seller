import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';

const Details = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  const { productId: productId } = useParams();
  console.log(productId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div>
      <div className="details-container">
        <div className="row container">
          <div className="col-md-6">
            <img className="w-50" src={product.image} alt="" />
            <p>{product?.description}</p>
            <h1>{product?.name}</h1>
            <h1> {product?.price}</h1>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                defaultValue={product?.name}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("description")}
                defaultValue={product?.description}
                placeholder="Description"
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                defaultValue={product?.image}
                className="p-2 m-2 w-100 input-field"
              />

              <input
                {...register("price", { required: true })}
                placeholder="Price"
                defaultValue={product?.price}
                type="number"
                className="p-2 m-2 w-100 input-field"
              />
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Order now"
                className="btn btn-info w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;