import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Animation from "../Animation/Animation";

export default function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{9,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 9 characters long and include one uppercase and one lowercase letter."
      );
      return;
    }

    setErrorMessage("");
    Cookies.set("user", JSON.stringify({ email, password }));
    navigate("/login");
  };

  return (
    <div className="container bg-[url('../../Imges/factory-DwwbhEY2.gif')] bg-center bg-no-repeat w-full bg-cover h-screen bg-gray-500 bg-blend-darken 2xl:h-screen">
      <div className="row">
        <div className="col-12 align-items-center align-content-center opacity-100 relative">
          <div className="2xl:my-10 d-flex justify-center mx-auto mt-2">
            <Animation />
          </div>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 opacity-100 m-auto md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign Up to our platform
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  By using this service, you agree to our Privacy Policy.
                </label>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-700 hover:underline dark:text-blue-500 ms-2"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="2xl:hidden">
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
