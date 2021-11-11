import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Products from './Pages/Products/Products';
import Naviagation from './Pages/Shared/Naviagation/Naviagation';
import Details from './Pages/Details/Details';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ManageOrder from './Pages/Dashboard/ManageAllOrders/ManageOrder';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Naviagation></Naviagation>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/allproducts">
            <Products />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/myOrder">
            <MyOrders />
          </Route>
          <Route path="/mgt">
            <ManageOrder />
          </Route>
          <Route path="/addproducts">
            <AddProducts />
            </Route>
            <PrivateRoute exact path="/products/:productId">
            <Details></Details>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
