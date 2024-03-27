import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/categories" exact>
          <Category />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        {/* <Route path="/*" exact>
          <Error />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
