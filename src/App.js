import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Orders from "./components/Orders/Orders";
import Home from "./components/Home/Home";
import Deals from "./components/Deals/Deals";
import Login from "./components/Login/Login";
import CheckOut from "./components/CheckOut/CheckOut";
import { createContext, useState } from "react";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AddProduct from "./components/AddProduct/AddProduct";
// import Admin from "./components/Admin/Admin";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import NoMatch from "./components/NoMatch/NoMatch";


export const UserContext = createContext()
export const ProductContext = createContext()

function App() {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [product, setProduct] = useState([])
    console.log('data is ', loggedInUser);
    return (

        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <ProductContext.Provider value={[product, setProduct]}>
                <Router>
                    {/* <Header /> */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/header">
                            <Header />
                        </Route>
                        <PrivateRoute path="/orders">
                            <Orders />
                        </PrivateRoute>
                        <PrivateRoute path="/admin">
                            <AddProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/addProduct">
                            <AddProduct />
                        </PrivateRoute>
                        <PrivateRoute path="/manageProduct">
                            <ManageProduct />
                        </PrivateRoute>
                        <Route path="/deals">
                            <Deals />
                        </Route>
                        <PrivateRoute path="/checkOut/:id">
                            <CheckOut />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Router>
            </ProductContext.Provider>
        </UserContext.Provider>

    );
}

export default App;
