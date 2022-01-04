import DetailPage from './component/detail/detailPage';
import HomePage from './component/HomePage';
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
          <Route path="/store/:id" exact >
            <DetailPage />
          </Route>
          </Switch>
    </Router>
  );
}

export default App;
