import React from 'react';
import { Container } from 'reactstrap';
import Navi from '../navbar/Navi';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router-dom';
import CartDetails from '../cart/CartDetails';
import NotFound from '../common/NotFound';

function App() {
  return (
      <Container>
        <Navi/>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/products' component={Dashboard}/>
          <Route exact path='/carts' component={CartDetails}/>
          <Route component={NotFound}/>
        </Switch>
      </Container>
  );
}

export default App;
