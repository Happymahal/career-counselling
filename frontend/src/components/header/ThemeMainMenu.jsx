import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HomeMenu = [
  {
    name: 'Home',
    routerPath: '/',
  },
];

const Miscellaneous = [
  {
    name: 'About Us',
    routerPath: '/about',
  },
];

const ThemeMainMenu = () => {
  return (
    <Fragment>
      <ul className="navbar-nav main-navbar mb-2 mb-lg-0 ps-1">
        {/* Home Menu Item */}
        <li className="nav-item">
          <Link className="nav-link" to={HomeMenu[0].routerPath}>
            {HomeMenu[0].name}
          </Link>
        </li>

        {/* About Us Menu Item */}
        <li className="nav-item">
          <Link className="nav-link" to={Miscellaneous[0].routerPath}>
            {Miscellaneous[0].name}
          </Link>
        </li>

        {/* Contact Menu Item */}
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
         {/* Feature */}
         <li className="nav-item">
          <Link className="nav-link" to="/feature">
            Chat Bot
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default ThemeMainMenu;
