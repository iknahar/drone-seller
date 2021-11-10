import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <h1 className="mt-5 text-center text-primary">All Products</h1>
        <div className="row container-fluid mx-auto">
          {products?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
                  <div className="m-4 border border-light rounded shadow-lg bg-white rounded" style={{ width: '360px' }}>
                <div className="">
                  <img style={{objectFit: "cover", height: "200px"}} className="w-100 p-4" src={pd?.image} alt="" />
                </div>
                <h4 className="text-primary mt-2 text-center">{pd.name}</h4>
                <p className="mt-2 text-center p-3" style={{height: '82px', overflow: "hidden"}}>{pd.description}</p>
                <p className=" mt-2 text-center"><b>Price: ${pd.price}</b></p>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-primary py-3 rounded-0 w-100">Order Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Products;