import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/pages/Navbar/nav';
import Search from './Component/pages/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Nav></Nav>
            <Search></Search>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
