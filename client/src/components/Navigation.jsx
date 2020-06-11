import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

import Search from './Search.jsx';

const NavigationContainer = styled.div`
  background-color: #343a40;
`;

const NavHome = styled.div`
  height: 50%;
  width: 15%;
  margin-right: 15px;
`;

function Navigation() {
  return (
    <NavigationContainer>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          <NavHome>
            <Link to="/">
              <img src="./tmdb.svg" alt="home logo" />
            </Link>
          </NavHome>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-5">
              <Link to="/watched" className="nav-item">
                <li className="nav-link">Watched</li>
              </Link>
              <Link to="/watch-list" className="nav-item">
                <li className="nav-link">To Watch</li>
              </Link>
            </ul>
            <Search />
          </div>
        </nav>
      </div>
    </NavigationContainer >
  );
}

export default Navigation;
