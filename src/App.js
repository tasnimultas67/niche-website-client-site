import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from "./Components/Header/NavBar";
import AboutUs from "./Components/Pages/About Us/AboutUs";
import AddProduct from "./Components/Pages/AddProduct/AddProduct";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import ManageProducts from "./Components/Pages/ManageProducts/ManageProducts";
import Products from "./Components/Pages/Products/Products";
import Register from "./Components/Pages/Register/Register";
import  NotFound  from "./Components/Pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Redirect/PrivateRoute";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./Components/Pages/Product Details/ProductDetails";
import BuyNow from "./Components/Pages/Buy Now/BuyNow";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/products'>
            <Products></Products>
          </Route>
          <Route exact path='/aboutUs'>
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute exact path='/addProduct'>
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute exact path='/manageProducts'>
            <ManageProducts></ManageProducts>
          </PrivateRoute>
          <PrivateRoute exact path='/productDetails/:id'>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute exact path='/productDetails/buyProduct/:id'>
            <BuyNow></BuyNow>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
          {/* <Route exact path='/'>
          </Route>
          <Route exact path='/'>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
