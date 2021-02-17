import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Products from './views/Products'
import Product from './views/Product'
import Home from './views/Home'
import NotFound from './views/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">

        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path="*" component={NotFound} />

        </Switch>

      </div>
    </BrowserRouter>
  );
}
export default App;
