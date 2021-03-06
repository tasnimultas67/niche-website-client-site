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
import MyOrders from "./Components/Pages/My Orders/MyOrders";
import ManageOrders from "./Components/Pages/Manage Orders/ManageOrders";
import MakeAdmin from "./Components/Pages/Make Admin/MakeAdmin";
import Contact from "./Components/Pages/Contact us/Contact";
import AddReview from "./Components/Pages/Add Review/AddReview";
import Pay from "./Components/Pages/Pay/Pay";
import UpdateOrder from "./Components/Pages/Update Order/UpdateOrder";

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
          <PrivateRoute exact path='/makeAdmin'>
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute exact path='/pay'>
            <Pay></Pay>
          </PrivateRoute>
          <PrivateRoute exact path='/contactUs'>
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute exact path='/manageorders/updateUserOrder/:id'>
            <UpdateOrder></UpdateOrder>
          </PrivateRoute>
          <PrivateRoute exact path='/addReview'>
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute exact path='/manageOrders'>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute exact path='/productDetails/:id'>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <PrivateRoute exact path='/productDetails/buyProduct/:id'>
            <BuyNow></BuyNow>
          </PrivateRoute>
          <PrivateRoute exact path='/myOrders'>
            <MyOrders></MyOrders>
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
