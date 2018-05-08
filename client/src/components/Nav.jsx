import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand">
        <Link to='/' style={{ textDecoration: 'none', color: 'white'}}>
          <span style={{fontFamily: "Georgia, serif"}} className="navbar-brand">
            Utility
          </span>
        </Link>
        <ul className="navbar-nav mr-auto">
          <NavItem>
            <NavLink to="/bill" className="nav-link">Bill</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/kwh" className="nav-link">Usage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/saving" className="nav-link">Saving</NavLink>
          </NavItem>
        </ul>
      </nav>
    </div>
  );
}
