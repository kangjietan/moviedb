import React from "react";
import styled from 'styled-components';

import { Link } from "react-router-dom";

const NavigationContainer = styled.div`
  background-color: white;
`;

const Form = styled.form`
  position: absolute;
  right: 0;
`;

const NavHome = styled.div`
  height: 50%;
  width: 15%;
`;

function Navigation() {
  return (
    <NavigationContainer>
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-light">
          <NavHome>
            <Link to="/">
              <img src="./tmdb.svg" alt="home logo" />
            </Link>
          </NavHome>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <Link to="/watched" className="nav-item">
                <li className="nav-link">Watched</li>
              </Link>
              <Link to="/watch-list" className="nav-item">
                <li className="nav-link">To Watch</li>
              </Link>
            </ul>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </NavigationContainer >
  );
}

export default Navigation;
