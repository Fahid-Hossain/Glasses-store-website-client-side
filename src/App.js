import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Products from './pages/Products/Products';
import Navigation from './pages/Shared/Navigation/Navigation';
import AddProducts from './pages/Products/AddProducts/AddProducts';
import Order from './pages/Products/Order/Order';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Route>
            <Navigation></Navigation>
          </Route>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/addproduct">
              <AddProducts />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/order/:id">
              <Order />
            </Route>
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
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
