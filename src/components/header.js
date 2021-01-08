import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logoFull from "../images/logo_full.svg";
import logoFullDark from "../images/logo_full_black.svg";

function Header(props) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header>
      <div className="flex flex-wrap justify-between mx-4 md:mx-16 mt-6">
        <Link className="flex items-center no-underline" to="/">
          {props.isDarkTheme ? (
            <img src={logoFullDark} className="w-32 font-sans" />
          ) : (
            <img src={logoFull} className="w-32 font-sans" />
          )}
        </Link>

        <button
          className="md:hidden border flex items-center px-3 py-2 rounded"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current w-8 h-8"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } flex flex-col justify-center align-center md:block md:items-center h-screen md:h-auto w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Home`,
            },
            {
              route: `/projects`,
              title: `Projects`,
            },
            {
              route: `/blog`,
              title: `Blog`,
            },
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              data-content={link.title}
              className=" inline-block no-underline font-semibold text-center m-2 p-2 slideUpBtn"
              key={link.title}
              to={link.route}
              activeClassName="active-link"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool,
};

export default Header;
