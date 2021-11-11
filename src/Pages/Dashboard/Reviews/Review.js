import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";


const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.displayName = user?.displayName;
    fetch("http://localhost:5000/addSReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
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