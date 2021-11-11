import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const ManageProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products, user?.email]);



  function handleDelete(id) {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      fetch(`http://localhost:5000/pdelete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remainingProducts = products.filter((product) => product._id !== id);
            setProducts(remainingProducts);
          } else {
            alert("Something went wrong!!");
          }
        });
    }
  }

  return (
    <div className="col-md-10">
      <h3 className="pt-3 text-center "><b>Your</b> <span className="text-primary"><b>All Products</b></span></h3>
      <p className="text-center ">You have {products.length} Drone Collection</p>
      <div className="pt-3">
        <table className='table table-bordered table-hover'>
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '10vw' }}>Image</td>
              <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '15vw' }}>Drone Name</td>
              <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '45vw'}}>Description</td>
              <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '6vw' }}>Price</td>
              <td className="p-3 bg-dark text-white font-weight-normal" style={{ width: '8vw' }}>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              products.map(od =>
                <tr key={od._id} style={{ textAlign: 'center' }}>
                  <td> <img className="w-50" src={od.image} alt="" /> </td>
                  <td>{od.name}</td>
                  <td>{od.description}</td>
                  <td>{od.price}</td>

                  <td>
                    <Button style={{ width: '7vw' }} variant="danger" onClick={() => handleDelete(od._id)}
                      className="btn btn-danger">Delete</Button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;