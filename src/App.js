import './App.scss';
import Header from './component/header/header';
import Body from './component/body/body';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Body />
    </div>
    </Router>
  );
}

export default App;
