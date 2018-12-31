import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';
import SignUpPage from './pages/SignUpPage';


const Routes = () => (
  <Router>
      <SignUpPage />
      {/* <Page /> */}
  </Router>
)

export default Routes;