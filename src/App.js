import './App.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Components/Login/Login';

function App() {
    return (<Router>
        <Switch>
            <Route exact path='/'>
                <HomeMain/>
            </Route>
            <Route  path='/home'>
                <HomeMain/>
            </Route>
            <Route>
              <Route path='/login'>
                <Login/>
              </Route>
            </Route>
        </Switch>

    </Router>);
}

export default App;
