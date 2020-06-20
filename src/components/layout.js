import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer>
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-black">
            Created by{` `}
            <span className="font-bold no-underline text-black">
              Stefan Eduard
            </span>
          </p>

          <p>
            <a
              className="font-bold no-underline text-black"
              href="https://github.com/edustef"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
