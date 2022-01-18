import DetailPage from './component/detail/detailPage';
import HomePage from './component/HomePage';
import ListCart from './component/cart/listCart';
import LoginPage from './component/login/LoginPage';
import SearchPage from './component/searchPage/searchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Switch>
          <Route path="/store" exact >
            <HomePage />
          </Route>
          <Route path="/store/cart" exact >
            <ListCart />
          </Route>
          <Route path="/store/product/:id" >
            <DetailPage />
          </Route>
          <Route path="/store/login" >
            <LoginPage />
          </Route>
          <Route path="/store/search" >
            <SearchPage />
          </Route> 
          </Switch>
    </Router>
  );
}

export default App;
