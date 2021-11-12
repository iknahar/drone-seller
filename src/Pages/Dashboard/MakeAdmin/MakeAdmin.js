import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";



const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      })
  };
  return (
    <div className="w-50 m-auto mt-5">
      <h3 className="pt-3 mt-5 text-center "><b>Make</b> <span className="text-primary"><b>Admin</b></span></h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2 w-100 input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="btn btn-primary rounded-pill p-2 m-2 mt-4 w-100"
          type="submit"
          value="Make Admin"
        />
      </form>
      {success && <Alert severity="success">Made Admin successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;