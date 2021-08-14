import React from 'react';
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import Signin from './pages/Signin';
import './styles/main.scss';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signin">
        <Signin />
      </PublicRoute>
      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
