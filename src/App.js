import './App.css';
import Navbar from './navbar';
import Home from './home';
import History from './history';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cocktails from './cocktails';


function App() {
  return (
    <Router>
    <Navbar/>
      <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/history' component={History}/>
    <Route path='/cocktail' component={Cocktails}/>

    </Switch>
   
    </Router>
  );
}

export default App;
