import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const Review = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const MySwal = withReactContent(Swal);
  const onSubmit = (data) => {
    data.displayName = user?.displayName;
    fetch("https://fast-earth-44959.herokuapp.com/addSReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Thank you for your review',
        showConfirmButton: false,
        timer: 1500
      }));;
  };
  return (
    <div>
      <h3 className="pt-3 mt-5 text-center "><b>Give Us Your Valuable</b> <span className="text-primary"><b>Review</b></span></h3>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-3 text-center ">

        <input
          className="input-field p-2 py-4 m-2 w-50"
          name="comments"
          placeholder="Comments"
          {...register("comments")}
        />
        <br />
        <input
          className="input-field p-2 m-2 w-50"
          name="rating"
          type="number"
          max="5"
          min='1'
          placeholder="Give Us a Rating"
          {...register("rating", { required: true })}
        />

        <br />
        <br />

        <input
          className="submit-btn btn btn-primary rounded-pill p-2 m-2 w-50"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default Review;