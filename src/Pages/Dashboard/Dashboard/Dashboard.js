import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

import "./Dashboard.css";

// import Review from "./../Review/Review";
// import MyBookings from "./../MyBookings/MyBookings";
// import MakeAdmin from "./../MakeAdmin/MakeAdmin";
// import ManageServices from "./../ManageServices/ManageServices";
import useAuth from "../../../hooks/useAuth";
// import AddProducts from "../../AddProducts/AddProducts";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmin);
    return (
      <div></div>
    // <div>
    //   <div className="dashboard-container ">
    //     <div className="row">
    //       <div className="col-md-3 ">
    //         <div className="dashboard">
    //           <h5>Dashboard</h5>
    //           <Link to={`${url}`}>
    //             <li className="dashboard-menu mt-5">Book</li>
    //           </Link>

    //           <Link to={`${url}/BookingList`}>
    //             <li className="dashboard-menu mt-5">Booking list</li>
    //           </Link>

    //           <Link to={`${url}/review`}>
    //             <li className="dashboard-menu mt-5">Review</li>
    //           </Link>
    //           <div className="admin-dashboard">
    //             <li className="dashboard-menu mt-5">Orders list</li>

    //             {isAdmin && (
    //               <Link to={`${url}/addProducts`}>
    //                 <li className="dashboard-menu">Add Product</li>
    //               </Link>
    //             )}
    //             <Link to={`${url}/makeAdmin`}>
    //               <li className="dashboard-menu">Make Admin</li>
    //             </Link>
    //             <Link to={`${url}/manageServices`}>
    //               <li className="dashboard-menu">Manage Service</li>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-9">
    //         <Switch>
    //           <Route exact path={path}>
    //             <MyBookings></MyBookings>
    //           </Route>
    //           <Route exact path={`${path}/review`}>
    //             <Review></Review>
    //           </Route>
    //           <Route exact path={`${path}/BookingList`}>
    //             <MyBookings></MyBookings>
    //           </Route>
    //           <Route exact path={`${path}/makeAdmin`}>
    //             <MakeAdmin></MakeAdmin>
    //           </Route>
    //           <Route exact path={`${path}/addProducts`}>
    //             <AddProducts></AddProducts>
    //           </Route>
    //           <Route exact path={`${path}/manageServices`}>
    //             <ManageServices></ManageServices>
    //           </Route>
    //         </Switch>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};


export default Dashbaord;