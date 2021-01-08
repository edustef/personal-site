import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import Header from "./header";
import { FaGithub } from "react-icons/fa";
import style from "./layout.module.css";

function Layout({ children }) {
  let [isDarkTheme, setIsDarkTheme] = useState(false);

  let rootClasses =
    style.layout +
    " flex flex-col font-sans min-h-screen text-gray-900 fade-in-fwd ";

  let toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
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
      <main className="mt-12 md:mt-0 flex flex-col flex-1 mx-4 md:mx-16 justify-center">
        {children}
      </main>

      <footer>
        <div className="flex justify-between max-w-4xl mx-auto md:my-12 text-md">
          <button onClick={toggleTheme}>Test change Theme</button>
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
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkTheme: PropTypes.bool,
};

export default Layout;
