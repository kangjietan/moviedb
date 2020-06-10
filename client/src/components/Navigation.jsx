import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

const NavigationContainer = styled.div`
`;

function Navigation() {
  return (
    <NavigationContainer>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Home</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Link to="/watched">
              <li className="nav-item">To watch</li>
            </Link>
          </ul>
        </div>
      </nav>
    </NavigationContainer>
  );
}

export default Navigation;
