import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 md:p-8">
        <Link className="flex items-center no-underline text-black" to="/">
          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
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
              title: `Home`
            },
            {
              route: `/projects`,
              title: `Projects`
            },
            {
              route: `/gallery`,
              title: `Photo Gallery`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="no-underline text-black text-center m-5 p-5 md:m-2 md:p-2   border-solid border-2 md:border-1 border-black magnify-border"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
