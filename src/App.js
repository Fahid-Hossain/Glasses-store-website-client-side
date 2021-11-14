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

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <Navigation></Navigation>
        </Route>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/addproduct">
          <AddProducts/>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    </div >
  );
}

export default App;
