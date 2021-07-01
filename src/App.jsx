import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
