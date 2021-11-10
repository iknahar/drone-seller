import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Products from './Pages/Products/Products';
import Naviagation from './Pages/Shared/Naviagation/Naviagation';
import AddProducts from './Pages/AddProducts/AddProducts';
import Details from './Pages/Details/Details';


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
          <Route path="/addproducts">
            <AddProducts />
            </Route>
            <Route exact path="/products/:productId">
            <Details></Details>
          </Route>
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
