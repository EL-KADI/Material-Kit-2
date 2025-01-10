import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const savedTheme = sessionStorage.getItem("isDarkMode");
    if (savedTheme === "true") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (savedTheme === "false") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      const currentHour = new Date().getHours();
      if (currentHour >= 18 || currentHour < 6) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);

    sessionStorage.setItem("isDarkMode", newIsDarkMode.toString());

    if (newIsDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="border-gray-200 fixed w-full overflow-hidden mt-3 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between rounded-2xl w-5/6 mx-auto p-4 sm:w-1/2 bg-customGray dark:bg-gray-900">
        <p className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Material Kit 2
          </span>
        </p>

        {!isDarkMode && (
          <span
            className="lg:-ms-56 text-2xl font-semibold -ms-4 sm:-ms-16 dark:text-white cursor-pointer "
            onClick={toggleTheme}
          >
            <MdLightMode />
          </span>
        )}

        {isDarkMode && (
          <span
            className="lg:-ms-56 text-2xl font-semibold -ms-4 sm:-ms-16 dark:text-white cursor-pointer"
            onClick={toggleTheme}
          >
            <MdDarkMode />
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full xl:block xl:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 xl:p-0 mt-4 border border-gray-100 rounded-lg xl:flex-row xl:space-x-8 rtl:space-x-reverse xl:mt-0 xl:border-0 dark:bg-gray-800 xl:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block bg-[lightseagreen] font-bold p-[0.8rem] lg:p-0.5 rounded-lg dark:bg-[#41119bdd] dark:text-rose-200"
                    : "block py-2 px-3 text-black rounded xl:p-0 dark:text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[lightseagreen] font-bold p-[0.8rem] lg:p-0.5 rounded-lg dark:bg-[#41119bdd] block dark:text-rose-200"
                    : "block py-2 px-3 text-black rounded xl:p-0 dark:text-white"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[lightseagreen] block font-bold p-[0.8rem] lg:p-0.5 rounded-lg dark:bg-[#41119bdd] dark:text-rose-200"
                    : "block py-2 px-3 text-black rounded xl:p-0 dark:text-white"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
