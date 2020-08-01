import React from "react";
import styled from 'styled-components';

import { Link, NavLink } from "react-router-dom";

import Search from './Search';

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
        <nav className="navbar navbar-expand-lg navbar-dark">
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
              <NavLink to="/watched" className="nav-item" activeStyle={{ color: "white" }}>
                <li className="nav-link">Watched</li>
              </NavLink>
              <NavLink to="/watch-list" className="nav-item" activeStyle={{ color: "white" }}>
                <li className="nav-link">To Watch</li>
              </NavLink>
            </ul>
            <Search />
            <ul className="navbar-nav">
              <NavLink to="/register" className="nav-item" activeStyle={{ color: "white" }}>
                <li className="nav-link">Register</li>
              </NavLink>
              <NavLink to="/login" className="nav-item" activeStyle={{ color: "white" }}>
                <li className="nav-link">Login</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </NavigationContainer >
  );
}

export default Navigation;
