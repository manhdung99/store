import DetailPage from './component/detail/detailPage';
import HomePage from './component/HomePage';
import ListCart from './component/cart/listCart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    {/* <div className="App">
    </div> */}
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
          
          </Switch>
    </Router>
  );
}

export default App;
