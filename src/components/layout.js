import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import Header from "./header";
import { FaGithub } from "react-icons/fa";

function Layout({ children }) {
  let [isDarkTheme, setIsDarkTheme] = useState(false);
  let rootClasses =
    "flex flex-col font-sans min-h-screen text-gray-900 layout-root fade-in-fwd ";

  let hideLoader = () => {
    document.querySelector(".loader").classList.add("loader-hide");
  };

  let toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    hideLoader();

    if (!window.localStorage.getItem("isDarkTheme")) {
      window.localStorage.setItem("isDarkTheme", isDarkTheme);
    } else {
      setIsDarkTheme(window.localStorage.getItem("isDarkTheme") == "true");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isDarkTheme", isDarkTheme);
  }, [isDarkTheme, rootClasses]);

  return (
    <div className={isDarkTheme ? rootClasses + "dark" : rootClasses + "light"}>
      <Header isDarkTheme={isDarkTheme} />
      <main className="flex flex-col flex-1 mx-16 my-12 justify-center">
        {children}
      </main>

      <footer>
        <button onClick={toggleTheme}>Change Theme</button>
        <nav className="flex justify-between max-w-4xl mx-auto md:my-12 text-md">
          <p className="">
            Created by{` `}
            <span className="font-bold no-underline">Stefan Eduard</span>
          </p>

          <p>
            <a
              className="font-bold no-underline"
              href="https://github.com/edustef"
            >
              <FaGithub className="inline" /> GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkTheme: PropTypes.bool,
};

export default Layout;
