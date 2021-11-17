import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Products from './pages/Products/Products';
import AddProducts from './pages/Products/AddProducts/AddProducts';
import Order from './pages/Products/Order/Order';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Shared/Navigation/Navbar';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder/ManageAllOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route>
            <Navbar></Navbar>
          </Route>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/addproduct">
              <AddProducts />
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin />
            </PrivateRoute>
            <PrivateRoute path="/manageallorder">
              <ManageAllOrder/>
            </PrivateRoute>
            <Route path="/products">
              <Products />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>
            <PrivateRoute path="/order/:id">
              <Order />
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Route>
            <Footer></Footer>
          </Route>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
