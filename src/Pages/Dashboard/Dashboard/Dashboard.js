import React, { useEffect, useState } from "react";
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import "./Dashboard.css";
import useAuth from "../../../hooks/useAuth";
import { Button } from "react-bootstrap";

import Review from "../Reviews/Review";
import MyBookings from "../MyOrders/MyOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageProduct/ManageProduct";
import AddProducts from "../AddProducts/AddProducts";
import Pay from './../Pay/Pay';
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";



const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user, logout } = useAuth();
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


  const activeSty = {
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="dashboard-container overflow-hidden">
        <div className="row">
          <div className="col-md-3 pe-0 col-12">
            <div className="dashboard ps-3">
              <h5 className='pt-5 py-3'>Hello, {user.displayName}!</h5>
              
              {!isAdmin && (
                <div>
                  <NavLink to={`${url}/BookingList`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu mt-5 p-1 text-left"> 📦 My Orders</li>
                  </NavLink>
                  <NavLink to={`${url}/Pay`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu p-1 text-left"> 💵 Pay</li>
                  </NavLink>

                  <NavLink to={`${url}/review`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu  p-1 text-left"> ⭐ Review</li>
                  </NavLink>
                </div>)}

              {isAdmin && (

                <div>
                  <NavLink to={`${url}/allOrders`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu p-1 text-left"> 🗃️ Manage All Orders</li>
                  </NavLink>
                  <NavLink to={`${url}/addProducts`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu p-1 text-left"> ➕ Add Product</li>
                  </NavLink>
                  <NavLink to={`${url}/manageServices`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu p-1 text-left"> 🚀 Manage Proucts</li>
                  </NavLink>

                  <NavLink to={`${url}/makeAdmin`} activeStyle={activeSty} className="text-light text-decoration-none">
                    <li className="dashboard-menu p-1 text-left"> 💠 Make Admin</li>
                  </NavLink>
                </div>
              )}
              <Button className="rounded-pill mt-5 px-5 btn btn-danger" onClick={logout}>Logout</Button>
            </div>
          </div>


          {/* ---------------Swithcing of the dashboard ---------------------- */}

          <div className="col-md-9 me-auto">
            <Switch>
              <Route exact path={path}>
              {isAdmin && (<ManageAllOrders></ManageAllOrders>)}
              {!isAdmin && (<MyBookings></MyBookings>)}
                
              </Route>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/allOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </Route>
              <Route exact path={`${path}/addProducts`}>
                <AddProducts></AddProducts>
              </Route>
              <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Dashbaord;